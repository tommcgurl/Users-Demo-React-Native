/**
 * Basic object for storing the random user data
 */
'use strict';
var React = require('react-native'),
  users;

users = (function() {

  function users(url) {
    this.url = (url || 'http://api.randomuser.me/?results=100');
    this.users = [];
  }

  users.prototype.fetchUsers = function() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setUsers(responseData.results);
      });
  };

  users.prototype.getUsers = function() {
    return this.users;
  };

  users.prototype.setUsers = function(data) {
    this.users = data;
  };

  return users;

})();

module.exports = new users();
