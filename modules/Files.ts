export const FileTypeDirectory = 'directory';
export const FileTypeFile = 'file';
export type FileTypes = 'directory' | 'file';

export type File = {
  type: FileTypes;
  repository: string;
  path: string;
  headline: string;
  tags: string[];
  variables: any[];
};

export type FilesState = {
  items: File[];
};

function initialState(): FilesState {
  return {
    items: [],
  };
}

export default function files(state = initialState(), action: FilesActions) {
  switch (action.type) {
    case FilesAddAction:
      return { ...state, items: [...state.items, action.payload] };
    case FilesRemoveAction: {
      const idx = state.items.findIndex(
        ({ repository, path }) => repository === action.payload.repository && path === action.payload.path,
      );
      if (idx === -1) {
        return state;
      }

      return {
        ...state,
        items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)],
      };
    }
    default:
      return state;
  }
}

export const FilesAddAction = 'Files/Add';

export function AddFile(file: File) {
  return {
    type: FilesAddAction as typeof FilesAddAction,
    payload: file,
  };
}

export const FilesRemoveAction = 'Files/Remove';

export function RemoveFile(repository: string, path: string) {
  return {
    type: FilesRemoveAction as typeof FilesRemoveAction,
    payload: {
      repository,
      path,
    },
  };
}

export type FilesActions = ReturnType<typeof AddFile> | ReturnType<typeof RemoveFile>;
