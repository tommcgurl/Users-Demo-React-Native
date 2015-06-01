'use strict';

var React = require('react-native'),
  Device = require('react-native-device');

var {
  View,
  Image,
  StyleSheet
} = React;

var ResponsiveImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string
  },

   _getImageStyle: function() {
    var model = Device.kind,
        imageStyle;

    if(model === 'iPhone4') { //small devices
        imageStyle = styles.iphone4;
    } else if (model === 'iPhone5') { //medium devices
        imageStyle = styles.iphone5;
    } else {                   // all others (larger)
        imageStyle = styles.iphone6
    }

    return imageStyle;
  },

  render: function() {

    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.image}}
          style={this._getImageStyle()} />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  iphone4: {
    height: 140,
    width: 140,
    borderRadius: 70
  },
  iphone5: {
    height: 180,
    width: 180,
    borderRadius: 90
  },
  iphone6: {
    height: 200,
    width: 200,
    borderRadius: 100
  }
});

module.exports = ResponsiveImage;
