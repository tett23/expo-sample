import { createStackNavigator } from 'react-navigation';
import FileScreen from '../screens/FileViewScreen';
import HomeScreen from '../screens/HomeScreen';
import TreeViewScreen from '../screens/TreeViewScreen';

export default createStackNavigator({
  Repositories: HomeScreen,
  TreeView: TreeViewScreen,
  FileView: FileScreen,
});
