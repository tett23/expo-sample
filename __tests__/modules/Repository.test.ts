import { createStore, Store } from 'redux';
import repositoryReducer, {
  AddRepository,
  RemoveRepository,
  RepositoryReducer,
  RepositoryTypeGit,
  SelectRepository,
  UnselectRepository,
} from '../../modules/Repository';

let store: Store<RepositoryReducer>;
beforeEach(() => {
  store = createStore(repositoryReducer);

  store.dispatch(
    AddRepository({
      type: RepositoryTypeGit as typeof RepositoryTypeGit,
      name: 'test',
      path: '/',
    }),
  );
});

describe('AddRepository', () => {
  it('', () => {
    store.dispatch(
      AddRepository({
        type: RepositoryTypeGit as typeof RepositoryTypeGit,
        name: 'test',
        path: '/',
      }),
    );

    expect(store.getState().items.length).toBe(2);
  });
});

describe('RemoveRepository', () => {
  it('', () => {
    expect(store.getState().items.length).toBe(1);

    store.dispatch(RemoveRepository(0));

    expect(store.getState().items.length).toBe(0);
  });

  it('nothing to do when provide out of index', () => {
    expect(store.getState().items.length).toBe(1);

    store.dispatch(RemoveRepository(1));

    expect(store.getState().items.length).toBe(1);
  });
});

describe('SelectRepository', () => {
  it('', () => {
    expect(store.getState().selectedIndex).toBe(null);

    store.dispatch(SelectRepository(0));

    expect(store.getState().selectedIndex).toBe(0);
  });

  it('nothing to do when provide out of index', () => {
    expect(store.getState().selectedIndex).toBe(null);

    store.dispatch(SelectRepository(1));

    expect(store.getState().selectedIndex).toBe(null);
  });
});

describe('UnselectRepository', () => {
  it('', () => {
    store.dispatch(SelectRepository(0));
    expect(store.getState().selectedIndex).toBe(0);

    store.dispatch(UnselectRepository());
    expect(store.getState().selectedIndex).toBe(null);
  });
});
