import { Container, Content, Header } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import TreeView from '../components/TreeView';

type Props = {
  navigation: any;
};

export default function TreeViewScreen({ navigation }: Props) {
  const transition = () => {
    navigation.navigate('File');
  };

  return (
    <ScrollView>
      <Container>
        <Header />
        <Content>
          <TreeView transition={transition} />
        </Content>
      </Container>
    </ScrollView>
  );
}
TreeViewScreen.navigationOptions = {
  title: 'TreeView',
};
