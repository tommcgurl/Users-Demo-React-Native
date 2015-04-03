var React = require('react-native');

var {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicatorIOS
} = React;

// Url for the randomuser.me api. Requesting 100 users
var url = 'http://api.randomuser.me/?results=100'

var UserList = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  },

  renderLoader: function() {
    return (
      <View style={styles.columnContainer}>
        <ActivityIndicatorIOS
            animating={true}
            color={'blue'}
            size={'large'} />
        <Text> Requesting Users... </Text>
      </View>
    );
  },

  render: function() {
      // If the state is fetching data show loader
      if(!this.state.loaded) {
        return this.renderLoader()
      }
  }

});


var styles = StyleSheet.create({
    columnContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }
  });

module.exports = UserList;
