import { List, ListItem, Text } from 'native-base';
import React from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../modules';
import { Repository, SelectRepository } from '../../modules/Repository';

type Props = {
  repositories: Repository[];
  selectRepository: (idx: number) => void;
};

export function Repositories({ repositories, selectRepository }: Props) {
  const items = repositories.map(({ name }, idx) => {
    return (
      <ListItem onPress={() => selectRepository(idx)}>
        <Text>{name}</Text>
      </ListItem>
    );
  });

  return <List>{items}</List>;
}

function mapStateToProps({ repositories }: State) {
  return { repositories: repositories.items };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    selectRepository(idx: number) {
      dispatch(SelectRepository(idx));
      dispatch(NavigationActions.navigate({ routeName: 'TreeView' }));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
