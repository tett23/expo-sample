import { createStore, Store } from 'redux';
import filesReducer, { AddFile, FilesState, FileTypeFile, RemoveFile } from '../../modules/Files';

let store: Store<FilesState>;
beforeEach(() => {
  store = createStore(filesReducer);

  store.dispatch(
    AddFile({
      type: FileTypeFile,
      repository: 'test',
      path: '/foo',
      headline: '',
      tags: [],
      variables: [],
    }),
  );
});

describe('AddFile', () => {
  it('', () => {
    store.dispatch(
      AddFile({
        type: FileTypeFile,
        repository: 'test',
        path: '/bar',
        headline: '',
        tags: [],
        variables: [],
      }),
    );

    expect(store.getState().items.length).toBe(2);
  });
});

describe('RemoveFile', () => {
  it('', () => {
    expect(store.getState().items.length).toBe(1);

    store.dispatch(RemoveFile('test', '/foo'));

    expect(store.getState().items.length).toBe(0);
  });

  it('nothing to do when file does not exist', () => {
    expect(store.getState().items.length).toBe(1);

    store.dispatch(RemoveFile('test', '/bar'));

    expect(store.getState().items.length).toBe(1);
  });
});
