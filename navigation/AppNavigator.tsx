import { createStackNavigator } from 'react-navigation';
import FileScreen from '../screens/FileScreen';
import HomeScreen from '../screens/HomeScreen';
import TreeViewScreen from '../screens/TreeViewScreen';

export default createStackNavigator({
  Main: HomeScreen,
  TreeView: TreeViewScreen,
  File: FileScreen,
});
