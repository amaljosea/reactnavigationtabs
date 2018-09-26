/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createMaterialTopTabNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation'

class start extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'login',
  })
  render () {
    return (
      <View style={styles.container}>
        <Button
          title="login"
          onPress={() => this.props.navigation.navigate('appTab')}
        />
      </View>
      )
  }
}

class Tab1 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tab 1',
  })
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab 1</Text>
      </View>
      )
  }
}


class Tab2 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tab 2',
  })
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab 2</Text>
      </View>
      )
  }
}

class Tab3 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tab 3',
  })
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab 3</Text>
      </View>
      )
  }
}

class Taba extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tab a',
  })
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab a</Text>
      </View>
      )
  }
}


class Tabb extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tab b',
  })
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab b</Text>
      </View>
      )
  }
}

export default class App extends Component{
  render() {
    return (
        <StartElement/>
    );
  }
}

const InsideTab = createMaterialTopTabNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: Tab2 },
  Tab3: { screen: Tab3 }
},
{
  tabBarOptions: {
    style: {
      paddingTop:150,
    },
  }
}
)

const TabElement = createBottomTabNavigator({
  Taba: { screen: Taba },
  Tabb: { screen: Tabb},
  Tabc: { screen: InsideTab},
})

const StartElement = createStackNavigator({
  start: { screen: start,
    navigationOptions: {
      headerBackTitle: 'logout'
    } },
  appTab: { screen: TabElement},
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
