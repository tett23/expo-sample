import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import fileViewReducer, {
  enterEditMode,
  enterPreviewMode,
  FileViewModeEdit,
  FileViewModePreview,
  FileViewState,
  loadFile,
  selectFile,
  storeFile,
} from '../../modules/FileView';

let store: Store<FileViewState>;
beforeEach(() => {
  store = createStore(fileViewReducer, applyMiddleware(thunk));
});

describe('selectFile', () => {
  it('', () => {
    store.dispatch(selectFile('test', '/bar'));

    expect(store.getState().repository).toBe('test');
    expect(store.getState().path).toBe('/bar');
  });
});

describe('enterPreviewMode', () => {
  it('', () => {
    store.dispatch(enterPreviewMode());

    expect(store.getState().mode).toBe(FileViewModePreview);
  });
});

describe('enterEditMode', () => {
  it('', () => {
    store.dispatch(enterEditMode());

    expect(store.getState().mode).toBe(FileViewModeEdit);
  });
});

describe('loadFile', () => {
  it('', async () => {
    await AsyncStorage.setItem('test_repo:/foo.md', 'test');
    await store.dispatch(loadFile('test_repo', '/foo.md') as any);

    expect(store.getState().body).toBe('test');
    expect(await AsyncStorage.getItem('test_repo:/foo.md')).toBe('test');
  });
});

describe('storeFile', () => {
  it('', async () => {
    await store.dispatch(storeFile('test_repo', '/foo.md', 'test') as any);

    expect(store.getState().body).toBe('test');
    expect(await AsyncStorage.getItem('test_repo:/foo.md')).toBe('test');
  });
});
