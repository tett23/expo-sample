import { combineReducers, createStore } from 'redux';
import files, { FilesState, FileTypeFile } from './Files';
import fileView, { FileViewModeEdit, FileViewState } from './FileView';
import repositories, { RepositoriesState, RepositoryTypeFolder, RepositoryTypeGit } from './Repository';

export type State = {
  repositories: RepositoriesState;
  files: FilesState;
  fileView: FileViewState;
};

const reducers = combineReducers({ repositories, files, fileView });
const initialState: State = {
  repositories: {
    selectedIndex: null,
    items: [
      {
        type: RepositoryTypeGit,
        name: 'test git repo',
        path: '/',
      },
      {
        type: RepositoryTypeFolder,
        name: 'test folder',
        path: '/',
      },
    ],
  },
  files: {
    items: [
      {
        type: FileTypeFile,
        repository: 'test git repo',
        path: '/foo.md',
        headline: '',
        tags: [],
        variables: [],
      },
      {
        type: FileTypeFile,
        repository: 'test folder',
        path: '/foo.md',
        headline: '',
        tags: [],
        variables: [],
      },
    ],
  },
  fileView: {
    repository: '',
    path: '',
    mode: FileViewModeEdit as typeof FileViewModeEdit,
  },
};

export default createStore(reducers, initialState);
