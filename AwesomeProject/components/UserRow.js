var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var capitalize = require('../utils/capitalize');

var UserRow = React.createClass({

  propTypes: {
    user: React.PropTypes.object
  },

  render: function() {
    var user = this.props.user,
      name = capitalize(user.name.first + ' ' + user.name.last),
      city = capitalize(user.location.city),
      state = capitalize(user.location.state),
      address = city +', ' + state;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: user.picture.thumbnail}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>{address}</Text>
        </View>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 53,
    borderRadius: 25
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20
  },
  name: {
    fontSize: 20,
    marginBottom: 8
  }
});

module.exports = UserRow;
