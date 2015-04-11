'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var capitalize = require('../utils/capitalize');

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
        <Image
          source={{uri: image}}
          style={styles.image} />
        <View style={styles.nameContainer} >
          <Text style={styles.text}>
            {name}
          </Text>
          <Text style={styles.text}>
            {city + ', ' + state}
          </Text>
        </View>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 75
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
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
