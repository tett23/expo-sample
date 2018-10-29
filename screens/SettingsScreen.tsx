import { ExpoConfigView } from '@expo/samples';
import React, { Component } from 'react';

export default class SettingsScreen extends Component {
  public static navigationOptions = {
    title: 'app.json',
  };

  public render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
