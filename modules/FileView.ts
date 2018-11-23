export type FileViewState = {
  repository: string;
  path: string;
};

function initialState(): FileViewState {
  return {
    repository: '',
    path: '',
  };
}

export default function fileView(state = initialState(), action: FileViewActions) {
  switch (action.type) {
    case SelectFileAction:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const SelectFileAction = 'FileView/SelectFile';

export function selectFile(repository: string, path: string) {
  return {
    type: SelectFileAction as typeof SelectFileAction,
    payload: {
      repository,
      path,
    },
  };
}

export type FileViewActions = ReturnType<typeof selectFile>;
