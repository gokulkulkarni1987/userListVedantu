import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

class DetailsScreen extends Component {

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
            justifyContent: 'space-evenly'
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
          />
        </View>
      </View>
    )
  }
}

export default DetailsScreen;