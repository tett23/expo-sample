import { Container, Header } from 'native-base';
import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import FileView from '../components/FileView/index';

export default function FileScreen() {
  return (
    <Container>
      <Header />
      <View style={styles.container}>
        <FileView />
      </View>
    </Container>
  );
}
FileScreen.navigationOptions = {
  title: 'File',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
