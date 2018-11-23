import { Text } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../modules';
import { File } from '../../modules/Files';

type Props = {
  file: File | null;
};

export function FileView({ file }: Props) {
  return <Text>{(file || { path: '' }).path}</Text>;
}

function mapStateToProps({ fileView, files }: State) {
  const file = files.items.find((item) => item.repository === fileView.repository && item.path === fileView.path);
  if (file == null) {
    return {
      file: null,
    };
  }

  return {
    file,
  };
}

export default connect(
  mapStateToProps,
  null,
)(FileView);
