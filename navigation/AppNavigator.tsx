import { createStackNavigator } from 'react-navigation';
import FileScreen from '../screens/FileViewScreen';
import RepositoriesScreen from '../screens/RepositoriesScreen';
import TreeViewScreen from '../screens/TreeViewScreen';

export default createStackNavigator({
  Repositories: RepositoriesScreen,
  TreeView: TreeViewScreen,
  FileView: FileScreen,
});
