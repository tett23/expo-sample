import { Container, Content, Header, List, ListItem, Text } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../modules';
import { File } from '../modules/Files';
import { selectFile } from '../modules/FileView';

type Props = {
  files: File[];
  transition: any;
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

function mapDispatchToProps(dispatch: Dispatch, { transition }: Props) {
  return {
    onPress(repository: string, path: string) {
      dispatch(selectFile(repository, path));
      transition();
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeView);
