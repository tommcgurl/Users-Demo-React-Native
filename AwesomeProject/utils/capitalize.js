/**
 * Small utility for capitalizing the first letter of
 * every work in a string.
 * Used for user's names, cities, and states
 */
'use strict'

function capitalize(string) {
  var strings = string.split(' '),
    capitalized = '';

  strings.forEach(string => {
    capitalized = capitalized + string[0].toUpperCase() + string.slice(1) + ' ';
  });

  return capitalized;
}

module.exports = capitalize;
