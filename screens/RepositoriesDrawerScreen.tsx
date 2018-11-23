import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../modules/index';

import { Header } from 'native-base';
import Repositories from '../components/Repositories';

export default function ConnectedNavigator() {
  return (
    <Header>
      <Repositories />
    </Header>
  );
}
