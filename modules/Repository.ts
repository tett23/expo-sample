export const RepositoryTypeGit = 'repository';
export const RepositoryTypeFolder = 'folder';
export type RepositoryTypes = 'repository' | 'folder';

export type Repository = {
  type: RepositoryTypes;
  name: string;
  path: string;
};
export type RepositoriesState = {
  items: Repository[];
  selectedIndex: number | null;
};

function initialState(): RepositoriesState {
  return {
    items: [],
    selectedIndex: null,
  };
}

export default function repositories(state = initialState(), action: RepositoryActions): RepositoriesState {
  switch (action.type) {
    case RepositoryAddAction:
      return { ...state, items: [...state.items, action.payload] };
    case RepositoryRemoveAction:
      return {
        ...state,
        items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)],
        selectedIndex: state.selectedIndex === action.payload ? null : state.selectedIndex,
      };
    case RepositorySelectAction:
      if (action.payload > state.items.length - 1) {
        return state;
      }

      return {
        ...state,
        selectedIndex: action.payload,
      };
    case RepositoryUnselectAction:
      return {
        ...state,
        selectedIndex: null,
      };
    default:
      return state;
  }
}

export const RepositoryAddAction = 'Repository/Add';

export function AddRepository(repo: Repository) {
  return {
    type: RepositoryAddAction as typeof RepositoryAddAction,
    payload: repo,
  };
}

export const RepositoryRemoveAction = 'Repository/RemoveRepository';

export function RemoveRepository(repoIndex: number) {
  return {
    type: RepositoryRemoveAction as typeof RepositoryRemoveAction,
    payload: repoIndex,
  };
}

export const RepositorySelectAction = 'Repository/SelectRepository';

export function SelectRepository(repoIndex: number) {
  return {
    type: RepositorySelectAction as typeof RepositorySelectAction,
    payload: repoIndex,
  };
}

export const RepositoryUnselectAction = 'Repository/UnselectRepository';

export function UnselectRepository() {
  return {
    type: RepositoryUnselectAction as typeof RepositoryUnselectAction,
    payload: {},
  };
}

export type RepositoryActions =
  | ReturnType<typeof AddRepository>
  | ReturnType<typeof RemoveRepository>
  | ReturnType<typeof SelectRepository>
  | ReturnType<typeof UnselectRepository>;
