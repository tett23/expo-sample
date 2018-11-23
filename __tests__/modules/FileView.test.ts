import { createStore, Store } from 'redux';
import fileViewReducer, {
  enterEditMode,
  enterPreviewMode,
  FileViewModeEdit,
  FileViewModePreview,
  FileViewState,
  selectFile,
} from '../../modules/FileView';

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
