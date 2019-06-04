/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Provider } from 'react-redux';
import React, {Component} from 'react';
import configureStore from './configureStore';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/home/HomeScreen';
import DetailsScreen from './src/details/DetailsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
});

const App = createAppContainer(AppNavigator);

class MainApp extends Component {

  constructor() {
    super();
    this.state = {
      store: configureStore(),
    };
  }

  render() {
    return (
      <Provider
        store={this.state.store}
      >
        <App />
      </Provider>
    );
  }
}

export default MainApp;