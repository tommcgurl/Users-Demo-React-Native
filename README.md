# Users-Demo-React-Native
An experimentation with react native that expands on the react-native 'movies' demo. This is a Work in Progress and I will be adding steps over time.

After going through the [tutorial on the React Native site](http://facebook.github.io/react-native/docs/tutorial.html#content), I thought it would be fun to expand upon it a bit and build a small demo app for viewing users. 

I'm using [Random API's](https://twitter.com/randomapi) [randomuser.me](https://randomuser.me/) for generating random users as the data source for my ListView application. It's a pretty awesome resource for some quick fake data.

####Steps

1. Generate the tutorial project using 
    ```
    react-native init AwesomeProject
    ```

2. Wrap the placeholder content in an IOS Navigation Controller using the [NavigatorIOS Component](http://facebook.github.io/react-native/docs/navigatorios.html#content)
