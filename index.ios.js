import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = {
  topStyle: {
    paddingTop: 50,
  },
};

class CoolProject extends Component {
  render() {
    return (
      <View style={styles.topStyle}>
        <Greetings name="Jack" />
        <Greetings name="John" />
        <Greetings name="David" />
      </View>
    );
  }
}

class Greetings extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}</Text>
    );
  }
}

AppRegistry.registerComponent('CoolProject', () => CoolProject);
