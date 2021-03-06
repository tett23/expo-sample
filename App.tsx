import Icon from '@expo/vector-icons';
import { AppLoading, Asset, Font, ScreenOrientation } from 'expo';
import React, { Component } from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

function isTablet() {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;
  return !(aspectRatio > 1.6);
}

if (isTablet()) {
  ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
}

import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect, Provider } from 'react-redux';
import spaceMono from './assets/fonts/SpaceMono-Regular.ttf';
import robotDev from './assets/images/robot-dev.png';
import robotProd from './assets/images/robot-dev.png';
import store, { State } from './modules';

const ReduxifyAppNavigator = reduxifyNavigator(AppNavigator, 'root');
function mapStateToProps(state: State) {
  return {
    state: state.navigation,
  };
}
const AppWithNavigationState = connect(mapStateToProps)(ReduxifyAppNavigator as any);

export class App extends Component<any> {
  public state = {
    isLoadingComplete: false,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };

    this.loadResourcesAsync = this.loadResourcesAsync.bind(this);
    this.handleLoadingError = this.handleLoadingError.bind(this);
    this.handleFinishLoading = this.handleFinishLoading.bind(this);
  }

  public render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppWithNavigationState {...{} as any} />
      </View>
    );
  }

  private async loadResourcesAsync(): Promise<any> {
    return Promise.all([
      Asset.loadAsync([robotDev, robotProd]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...(Icon.Ionicons as any).font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': spaceMono,
      }),
    ]);
  }

  private handleLoadingError(error: any) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  private handleFinishLoading() {
    this.setState({ isLoadingComplete: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
