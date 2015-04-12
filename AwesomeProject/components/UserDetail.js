'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var capitalize = require('../utils/capitalize'),
  InfoTabs = require('./InfoTabs');

var UserDetail = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render: function() {
    var user = this.props.user,
      image = user.picture.large,
      name = capitalize((user.name.first + ' ' + user.name.last)),
      city = capitalize(user.location.city),
      state = capitalize(user.location.state);

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: image}}
            style={styles.image} />
        </View>
        <View style={styles.nameContainer} >
          <Text style={styles.text}>
            {name}
          </Text>
          <Text style={styles.text}>
            {city + ', ' + state}
          </Text>
        </View>
        <InfoTabs/>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 175
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  infoTabContainer: {
    flex: 1
  },
  text: {
    fontSize: 20
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 125
  }
});
module.exports = UserDetail;
