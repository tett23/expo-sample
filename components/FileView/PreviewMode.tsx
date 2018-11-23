import { Fab, Icon, Text, View } from 'native-base';
import React, { Fragment } from 'react';
import { File } from '../../modules/Files';

type Props = {
  file: File;
  body: string;
  onPressFab: () => void;
};

export default function PreviewMode({ file, body, onPressFab }: Props) {
  return (
    <Fragment>
      <View>
        <Text>{file.path}</Text>
        <Text>{body}</Text>
      </View>
      <Fab onPress={onPressFab}>
        <Icon type="FontAwesome" name="edit" />
      </Fab>
    </Fragment>
  );
}
