import { Container, Content, Header } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import TreeView from '../components/TreeView';

type Props = {
  navigation: any;
};

export default function TreeViewScreen({ navigation }: Props) {
  return (
    <ScrollView>
      <Container>
        <Header />
        <Content>
          <TreeView />
        </Content>
      </Container>
    </ScrollView>
  );
}
TreeViewScreen.navigationOptions = {
  title: 'TreeView',
};
