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

  propTypes: {
    user: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      selectedTab: 'user'
    };
  },

  renderUserView: function() {
    var username = this.props.user.username,
      password = this.props.user.password;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'Username: ' + username}</Text>
        <Text style={styles.text}>{'Password: ' + password}</Text>
      </View>
    );
  },

  renderEmailView: function() {
    var email = this.props.user.email;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'Email: ' + email}</Text>
      </View>
    );
  },

  renderAddressView: function() {
    var address = this.props.user.location,
      street = address.street,
      city = address.city,
      state = address.state,
      zip = address.zip;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{street}</Text>
        <Text style={styles.text}>{city + ', ' + state + ' ' + zip}</Text>
      </View>
    );
  },

  renderPhoneView: function() {
    var home = this.props.user.phone,
      cell = this.props.user.cell;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'Home: ' + home}</Text>
        <Text style={styles.text}>{'Cell: ' + cell}</Text>
      </View>
    );
  },

  renderDOBView: function() {
    var dob = this.props.user.dob,
      dateString;

    dob = new Date(parseInt(dob  + '000'));
    dateString = dob.toDateString()
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'Date of Birth:'}</Text>
        <Text style={styles.text}>{dateString}</Text>
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
            {this.renderUserView()}
          </Tab>
          <Tab
            icon={_icon('phone')}
            title={'phone'}
            selected={this.state.selectedTab === 'phone'}
            onPress={this.selectTab.bind(null, 'phone')} >
            {this.renderPhoneView()}
          </Tab>
          <Tab
            icon={_icon('email')}
            title={'email'}
            selected={this.state.selectedTab === 'email'}
            onPress={this.selectTab.bind(null, 'email')} >
            {this.renderEmailView()}
          </Tab>
          <Tab
            icon={_icon('location')}
            title={'address'}
            selected={this.state.selectedTab === 'address'}
            onPress={this.selectTab.bind(null, 'address')} >
            {this.renderAddressView()}
          </Tab>
          <Tab
            icon={_icon('calendar')}
            title={'D.O.B.'}
            selected={this.state.selectedTab === 'dob'}
            onPress={this.selectTab.bind(null, 'dob')} >
            {this.renderDOBView()}
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



var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});

module.exports = InfoTabs;
