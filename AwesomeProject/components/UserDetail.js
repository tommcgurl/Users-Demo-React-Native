'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var UserDetail = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render: function() {
    var user = this.props.user,
      image = user.picture.large;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: image}}
          style={styles.image} />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 125
  }
});
module.exports = UserDetail;
