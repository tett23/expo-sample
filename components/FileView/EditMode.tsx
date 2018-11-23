import { Fab, Form, Icon, Text, Textarea, View } from 'native-base';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { File } from '../../modules/Files';

type Props = {
  file: File;
  body: string;
  onPressFab: () => void;
  onChangeText: (text: string) => void;
};

export default function EditMode({ file, body, onPressFab, onChangeText }: Props) {
  return (
    <Fragment>
      <View>
        <Text>{file.path}</Text>
        <Form>
          <Textarea
            style={styles.textarea}
            rowSpan={10}
            onChangeText={onChangeText}
            placeholder="Textarea"
            value={body}
          />
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
