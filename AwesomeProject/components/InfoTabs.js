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
      selectedTab: 'user'
    };
  },

  renderSimpleView: function() {
    return (
      <View style={styles.container}>
        <Text>{'hi'}</Text>
      </View>
    );
  },

  selectTab: function(tabName) {
    // Change the state so the tab rerenders with the proper one selected
    this.setState({
      selectedTab: tabName
    });
  },

  render: function() {
    return (
        <TabBarIOS>
          <Tab
            icon={_icon('contact')}
            title={'user'}
            selected={this.state.selectedTab === 'user'}
            onPress={this.selectTab.bind(null, 'user')} >
            <View></View>
          </Tab>
          <Tab
            icon={_icon('phone')}
            title={'phone'}
            selected={this.state.selectedTab === 'phone'}
            onPress={this.selectTab.bind(null, 'phone')} >
            <View></View>
          </Tab>
          <Tab
            icon={_icon('email')}
            title={'email'}
            selected={this.state.selectedTab === 'email'}
            onPress={this.selectTab.bind(null, 'email')} >
            <View></View>
          </Tab>
          <Tab
            icon={_icon('location')}
            title={'address'}
            selected={this.state.selectedTab === 'address'}
            onPress={this.selectTab.bind(null, 'address')} >
            <View></View>
          </Tab>
          <Tab
            icon={_icon('calendar')}
            title={'D.O.B.'}
            selected={this.state.selectedTab === 'dob'}
            onPress={this.selectTab.bind(null, 'dob')} >
            <View></View>
          </Tab>
        </TabBarIOS>
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
