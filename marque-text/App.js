import React, { Component } from 'react'
import { Button, StyleSheet, View, Text, Image  } from 'react-native'
import TextTicker from 'react-native-text-ticker'

//import { createStackNavigator, createAppContainer } from 'react-navigation';

import Page1 from './components/Page1';

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 16}}
          duration={10000}
          bounce={false}
        >
          <Text onPress={() => this.props.navigation.navigate('Page1')}>
            This is first ticker ticker about xyz {' ** '}
          </Text>
          <Text>
            This is second ticker ticker about abc {' ** '}
          </Text>
          <Text>
            This is third ticker ticker about pqr {' **  '}
          </Text>
        </TextTicker>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 500}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

/*const AppNavigator = createStackNavigator({
  Page1: {
    screen: Page1
  }
});
const AppContainer = createAppContainer(AppNavigator);*/