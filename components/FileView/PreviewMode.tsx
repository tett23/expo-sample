import { Fab, Icon, Text, View } from 'native-base';
import React, { Fragment } from 'react';
import { File } from '../../modules/Files';

type Props = {
  file: File;
  onPressFab: () => void;
};

export default function PreviewMode({ file, onPressFab }: Props) {
  return (
    <Fragment>
      <View>
        <Text>{file.path}</Text>
      </View>
      <Fab onPress={onPressFab}>
        <Icon type="FontAwesome" name="edit" />
      </Fab>
    </Fragment>
  );
}
