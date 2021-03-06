import { Container, Content, Header } from 'native-base';
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Repositories from '../components/Repositories';

export default class HomeScreen extends Component {
  public static navigationOptions = {
    title: 'Repositories',
  };

  public render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Header />
          <Content>
            <Repositories />
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
