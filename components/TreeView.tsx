import { List, ListItem, Text } from 'native-base';
import React from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../modules';
import { File } from '../modules/Files';
import { loadFile, selectFile } from '../modules/FileView';

type Props = {
  files: File[];
  onPress: (repository: string, path: string) => void;
};

export function TreeView({ files, onPress }: Props) {
  const items = files.map(({ repository, path }) => (
    <ListItem
      onPress={() => {
        onPress(repository, path);
      }}
    >
      <Text>{path}</Text>
    </ListItem>
  ));

  return <List>{items}</List>;
}

function mapStateToProps({ repositories, files }: State) {
  if (repositories.selectedIndex == null) {
    return { files: [] };
  }

  const repository = repositories.items[repositories.selectedIndex];
  const items = files.items.filter((item) => item.repository === repository.name);

  return {
    files: items,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onPress(repository: string, path: string) {
      dispatch(selectFile(repository, path));
      dispatch(loadFile(repository, path));
      dispatch(NavigationActions.navigate({ routeName: 'FileView' }));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeView);
