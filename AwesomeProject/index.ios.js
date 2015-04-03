/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} = React;

var UserList = require('./components/UserList');

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: UserList,
          title: 'Users'
        }}
        style={styles.navContent}
      />
    );
  }
});

var styles = StyleSheet.create({
  navContent: {
    flex: 1
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
