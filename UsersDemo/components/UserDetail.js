'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var capitalize = require('../utils/capitalize'),
  InfoTabs = require('./InfoTabs'),
  ResponsiveImage = require('./ResponsiveImage');

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
        <Image source={_icon('background')}style={styles.backgroundImage}>
          <View style={styles.imageContainer}>
            <ResponsiveImage
                image={image}/>
          </View>
          <View style={styles.nameContainer} >
            <Text style={styles.text}>
              {name}
            </Text>
            <Text style={styles.text}>
              {city + ', ' + state}
            </Text>
          </View>
          <InfoTabs
            user={user} />
        </Image>
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

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#333333',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  imageContainer: {
    marginTop: 80
  },
  nameContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: 'transparent'
  },
  text: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 18,
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});
module.exports = UserDetail;
