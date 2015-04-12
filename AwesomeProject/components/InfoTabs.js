/**
 * Component for displaying user infromation in an
 * iOS TabView
 */

'use strict';
var React = require('react-native');

var {
  View,
  Text,
  TabBarIOS,
  StyleSheet
} = React;

var Tab = TabBarIOS.Item;

var InfoTabs = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'one'
    };
  },

  renderSimpleView: function() {
    return (
      <View style={styles.container}>
        <Text>{'hi'}</Text>
      </View>
    );
  },

  render: function() {
    return (
      <View>
        <TabBarIOS>
          <Tab
            icon={_icon('contact')}
            title={'user'}
            selected={true}>
            <View></View>
          </Tab>
          <Tab
            icon={_icon('phone')}
            title={'phone'}
            selected={false}>
            <View></View>
          </Tab>
          <Tab
            icon={_icon('email')}
            title={'email'}
            selected={false}>
            <View></View>
          </Tab>
          <Tab
            icon={_icon('location')}
            title={'address'}
            selected={false}>
            <View></View>
          </Tab>
          <Tab
            icon={_icon('calendar')}
            title={'D.O.B.'}
            selected={false}>
            <View></View>
          </Tab>
        </TabBarIOS>
      </View>
    );
  }
});

function _icon(imageUri) {
  return {
    uri: imageUri,
    isStatic: true
  }
};



var style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start'
  }
});

module.exports = InfoTabs;
