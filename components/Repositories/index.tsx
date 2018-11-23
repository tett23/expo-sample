import { List, ListItem, Text } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../modules';
import { Repository, SelectRepository } from '../../modules/Repository';

type Props = {
  repositories: Repository[];
  transition: () => void;
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

function mapDispatchToProps(dispatch: Dispatch, { transition }: Props) {
  return {
    selectRepository(idx: number) {
      dispatch(SelectRepository(idx));
      transition();
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
