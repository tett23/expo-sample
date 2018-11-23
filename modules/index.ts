import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import files, { FilesState, FileTypeFile } from './Files';
import fileView, { FileViewModeEdit, FileViewState } from './FileView';
import navigation from './Navigation';
import repositories, { RepositoriesState, RepositoryTypeFolder, RepositoryTypeGit } from './Repository';

export type State = {
  repositories: RepositoriesState;
  files: FilesState;
  fileView: FileViewState;
  navigation: any;
};

const reducers = combineReducers({ repositories, files, fileView, navigation });
const initialState: Pick<State, 'repositories' | 'files'> = {
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
};

const middleware = createReactNavigationReduxMiddleware('root', (state: any) => state.navigation);

export default createStore(reducers, initialState, applyMiddleware(middleware));
