import { Dispatch } from 'react';
import { AsyncStorage } from 'react-native';

export const FileViewModePreview = 'preview';
export const FileViewModeEdit = 'edit';
export type FileViewModes = 'preview' | 'edit';

export type FileViewState = {
  repository: string;
  path: string;
  body: string;
  mode: FileViewModes;
};

function initialState(): FileViewState {
  return {
    repository: '',
    path: '',
    body: '',
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
    case LoadFileAction:
      return {
        ...state,
        ...action.payload,
      };
    case StoreFileAction:
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

export const LoadFileAction = 'FileView/LoadFileAction';
type LoadFilePayload = {
  type: 'FileView/LoadFileAction';
  payload: {
    body: string;
  };
};

export function loadFile(repository: string, path: string) {
  return async (dispatch: Dispatch<any>) => {
    const body = (await AsyncStorage.getItem(`${repository}:${path}`)) || '';

    dispatch({
      type: LoadFileAction as typeof LoadFileAction,
      payload: {
        body,
      },
    });
  };
}

export const StoreFileAction = 'FileView/StoreFileAction';
type StoreFilePayload = {
  type: 'FileView/StoreFileAction';
  payload: {
    body: string;
  };
};

export function storeFile(repository: string, path: string, body: string) {
  return async (dispatch: Dispatch<any>) => {
    await AsyncStorage.setItem(`${repository}:${path}`, body);

    return dispatch({
      type: StoreFileAction as typeof StoreFileAction,
      payload: {
        body,
      },
    });
  };
}

export type FileViewActions =
  | ReturnType<typeof selectFile>
  | ReturnType<typeof enterPreviewMode>
  | ReturnType<typeof enterEditMode>
  | StoreFilePayload
  | LoadFilePayload;
