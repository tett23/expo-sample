import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../modules';
import { File } from '../../modules/Files';
import { enterEditMode, enterPreviewMode, FileViewModeEdit } from '../../modules/FileView';
import EditMode from './EditMode';
import Empty from './Empty';
import PreviewMode from './PreviewMode';

type Props = {
  file: File | null;
  mode: string;
  onPressEditButton: () => void;
  onPressPreviewButton: () => void;
};

export function FileView({ file, mode, onPressEditButton, onPressPreviewButton }: Props) {
  if (file == null) {
    return <Empty />;
  }

  if (mode === FileViewModeEdit) {
    return <EditMode file={file} onPressFab={onPressPreviewButton} />;
  } else {
    return <PreviewMode file={file} onPressFab={onPressEditButton} />;
  }
}

function mapStateToProps({ fileView, files }: State) {
  const file = files.items.find((item) => item.repository === fileView.repository && item.path === fileView.path);
  if (file == null) {
    return {
      file: null,
      mode: fileView.mode,
    };
  }

  return {
    file,
    mode: fileView.mode,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onPressEditButton() {
      dispatch(enterEditMode());
    },
    onPressPreviewButton() {
      dispatch(enterPreviewMode());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileView);
