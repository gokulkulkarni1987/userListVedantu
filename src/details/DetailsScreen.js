import React, { Component } from 'react';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from "react-redux";
import { Card, Button, Icon, Text } from 'react-native-elements';
import {
  userDisLiked,
  userLiked
} from '../home/actions/UserActions';

class DetailsScreen extends Component {

  itemClicked(item) {
    this.props.navigation.navigate('Details', {
      item
    })
  }

  onLikePress(item) {
    this.props.userLiked(item);
  }

  onDisLikePress(item) {
    this.props.userDisLiked(item);
  }

  renderItem({ item }) {
    let currentItem = this.props.navigation.getParam("item");
    if (item.id === currentItem.id) {
      return null;
    }
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
    let item = this.props.navigation.getParam("item");
    return (
      <View>
        <Card
          title={item.title}
          image={{
            uri: item.url
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10
          }}
        >
          <Text>Likes: {item.likesCount}</Text>
          <Text>DisLikes: {item.dislikesCount}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10
          }}
        >
          <Button
            icon={
              <Icon
                name="chevron-right"
                size={15}
                color="white"
              />
            }
            title="Like"
            onPress={() => this.onLikePress(item)}
          />

          <Button
            icon={
              <Icon
                name="chevron-left"
                size={15}
                color="white"
              />
            }
            title="Dis-Like"
            onPress={() => this.onDisLikePress(item)}
          />
        </View>
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
  userDisLiked,
  userLiked
})(DetailsScreen);