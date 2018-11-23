import { Fab, Form, Icon, Textarea, View } from 'native-base';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { File } from '../../modules/Files';

type Props = {
  file: File;
  onPressFab: () => void;
};

export default function EditMode({ file, onPressFab }: Props) {
  return (
    <Fragment>
      <View>
        <Form>
          <Textarea style={styles.textarea} rowSpan={10} placeholder="Textarea" value={file.path} />
        </Form>
      </View>
      <Fab onPress={onPressFab}>
        <Icon type="FontAwesome" name="file" />
      </Fab>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  textarea: {
    height: '100%',
  },
});
