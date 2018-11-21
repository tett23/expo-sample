import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MainContainer from '../components/MainContainer';

export default class HomeScreen extends Component {
  public static navigationOptions = {
    title: 'Links',
  };

  public render() {
    return (
      <ScrollView style={styles.container}>
        <MainContainer />
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
