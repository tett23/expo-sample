import { combineReducers, createStore } from 'redux';
import repositories, { RepositoryReducer, RepositoryTypeFolder, RepositoryTypeGit } from './Repository';

const reducers = combineReducers(repositories);
const initialState: { repositories: RepositoryReducer } = {
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
};

export const store = createStore(reducers, initialState);
