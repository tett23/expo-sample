import { combineReducers, createStore } from 'redux';
import files, { FilesState } from './Files';
import repositories, { RepositoriesState, RepositoryTypeFolder, RepositoryTypeGit } from './Repository';

export type State = {
  repositories: RepositoriesState;
  files: FilesState;
};

const reducers = combineReducers({ repositories, files });
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
    items: [],
  },
};

export default createStore(reducers, initialState);
