var React = require('react-native');

var {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicatorIOS
} = React;

// Url for the randomuser.me api. Requesting 100 users
var userStore = require('../stores/users.js');

var UserList = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  },

  componentDidMount: function() {
    userStore.fetchUsers()
      .done(()=> {
        // Set the datasource to the users data
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(userStore.getUsers()),
          loaded: true
        });
      });
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

  /**
   * Render a single user row
   */
  renderUser: function(row) {
    return (
      <Text>{row.user.name.first}</Text>
    );
  },

  render: function() {
      // If the state is fetching data show loader
      if(!this.state.loaded) {
        return this.renderLoader()
      }

      /*
       * If the data has been fetched render it to an iOS ListView
       * passing it a function (this.renderUser) for rendering each
       * indiviual row in the ListView
       */
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderUser} />
      );
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
