import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../../modules';
import { File } from '../../modules/Files';
import { enterEditMode, enterPreviewMode, FileViewModeEdit, storeFile } from '../../modules/FileView';
import EditMode from './EditMode';
import Empty from './Empty';
import PreviewMode from './PreviewMode';

type Props = {
  file: File | null;
  body: string;
  mode: string;
  onPressEditButton: () => void;
  onPressPreviewButton: () => void;
  onChangeText: (file: File | null, text: string) => void;
};

export function FileView({ file, body, mode, onPressEditButton, onPressPreviewButton, onChangeText }: Props) {
  if (file == null) {
    return <Empty />;
  }

  if (mode === FileViewModeEdit) {
    return (
      <EditMode
        file={file}
        body={body}
        onPressFab={onPressPreviewButton}
        onChangeText={(text) => onChangeText(file, text)}
      />
    );
  } else {
    return <PreviewMode file={file} body={body} onPressFab={onPressEditButton} />;
  }
}

function mapStateToProps({ fileView, files }: State) {
  const file = files.items.find((item) => item.repository === fileView.repository && item.path === fileView.path);
  if (file == null) {
    return {
      file: null,
      body: '',
      mode: fileView.mode,
    };
  }

  return {
    file,
    body: fileView.body,
    mode: fileView.mode,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onPressEditButton() {
      dispatch(enterEditMode());
    },
    onPressPreviewButton() {
      dispatch(enterPreviewMode());
    },
    onChangeText(file: File | null, text: string) {
      if (file == null) {
        return;
      }

      dispatch(storeFile(file.repository, file.path, text));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileView);
