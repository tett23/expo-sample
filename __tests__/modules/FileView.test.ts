import { createStore, Store } from 'redux';
import fileViewReducer, { FileViewState, selectFile } from '../../modules/FileView';

let store: Store<FileViewState>;
beforeEach(() => {
  store = createStore(fileViewReducer);
});

describe('selectFile', () => {
  it('', () => {
    store.dispatch(selectFile('test', '/bar'));

    expect(store.getState().repository).toBe('test');
    expect(store.getState().path).toBe('/bar');
  });
});
