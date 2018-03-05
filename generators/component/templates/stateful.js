// @flow
import * from React, { Component } from 'react';
import { View, Text } from './styles';

type State = {
};

type Props = {
};

class <%= component %> extends Component {
  state: State;
  props: Props;

  constructor(props: Object) {
    super(props);

    this.state = {};
  }

  render(): React.Node {
    return (
      <View>
        <Text><%= component %></Text>
      </View>
    );
  }
}

export default <%= component %>;
