import { Container, Content, Header } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import FileView from '../components/FileView/index';

export default function FileScreen() {
  return (
    <ScrollView>
      <Container>
        <Header />
        <Content>
          <FileView />
        </Content>
      </Container>
    </ScrollView>
  );
}
FileScreen.navigationOptions = {
  title: 'File',
};
