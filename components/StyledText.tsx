import React, { Component } from 'react';
import { Text } from 'react-native';

export class MonoText extends Component<any> {
  public render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
