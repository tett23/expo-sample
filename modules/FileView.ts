export const FileViewModePreview = 'preview';
export const FileViewModeEdit = 'edit';
export type FileViewModes = 'preview' | 'edit';

export type FileViewState = {
  repository: string;
  path: string;
  mode: FileViewModes;
};

function initialState(): FileViewState {
  return {
    repository: '',
    path: '',
    mode: FileViewModeEdit as typeof FileViewModeEdit,
  };
}

export default function fileView(state = initialState(), action: FileViewActions) {
  switch (action.type) {
    case SelectFileAction:
      return {
        ...state,
        ...action.payload,
      };
    case EnterEditModeAction:
      return {
        ...state,
        ...action.payload,
      };
    case EnterPreviewModeAction:
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

export const EnterPreviewModeAction = 'FileView/EnterPreviewModeAction';

export function enterPreviewMode() {
  return {
    type: EnterPreviewModeAction as typeof EnterPreviewModeAction,
    payload: {
      mode: FileViewModePreview as typeof FileViewModePreview,
    },
  };
}

export const EnterEditModeAction = 'FileView/EnterEditModeAction';

export function enterEditMode() {
  return {
    type: EnterEditModeAction as typeof EnterEditModeAction,
    payload: {
      mode: FileViewModeEdit as typeof FileViewModeEdit,
    },
  };
}

export type FileViewActions =
  | ReturnType<typeof selectFile>
  | ReturnType<typeof enterPreviewMode>
  | ReturnType<typeof enterEditMode>;
