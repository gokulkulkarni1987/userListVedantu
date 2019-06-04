import React, { Component } from 'react';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from "react-redux";
import { Card, Button, Icon, Text } from 'react-native-elements';
import {
  find
} from 'lodash'
import {
  userDisLiked,
  userLiked
} from '../home/actions/UserActions';

class DetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.refersh = true;
  }

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
    console.log('main item', currentItem.id);
    console.log('cur item', item.id);
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
    console.log('tis is called', item);
    item = find(this.props.users, (user) => user.id === item.id);
    this.refersh = !this.refersh;
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
          <Text>Likes: {(item.likesCount) ? item.likesCount: 0}</Text>
          <Text>DisLikes: {(item.dislikesCount) ? item.dislikesCount: 0}</Text>
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
          extraData={this.refersh}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ users, refresh }) => {
  return { ...users, refresh };
};

export default connect(mapStateToProps, {
  userDisLiked,
  userLiked
})(DetailsScreen);