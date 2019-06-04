import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  View,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import { Text, Card } from 'react-native-elements';
import {
  fetchUsers
} from './actions/UserActions';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderItem({ item }) {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.itemClicked(item)}
      >
        <Card
          title={item.title}
          image={{
            uri: item.thumbnailUrl
          }}
        />
      </TouchableWithoutFeedback>
    );
  }

  keyExtractor(item) {
    return `item-${item.id}`;
  }

  render() {
    console.log('this.props.', this.props);
    return (
      <View>
        <FlatList
          data={this.props.users}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor.bind(this)}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { ...users };
};

export default connect(mapStateToProps, {
  fetchUsers
})(HomeScreen);