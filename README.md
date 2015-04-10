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

3. Replace placeholder view with a animated loader while the users list is fetched. 

4. Create a basic object to fetch and store the data from the Random User API.
    - This object uses the RandomUser API url and fetches 100 users.
    - It has a getter and setter function for the data
    - The fetch function uses promises to set the data once the response is returned from the API.

5. Fetch the users data and render the results to a ListView
    - Added a __componentDidMount__ function that fetches the user store then calls setState to set the result of the fetch to the UserList components dataSource
    - Added a temporary __renderUser__ function to render a ListView row as a simple Text component containing the user's first name for now. 

6. Create a row for each user with their picture, name, and address.
    - Added the __UserRow Component__
    - This componenet is used as the row template for each user that will be populating the ListView
    - Added a __capitalized util__ to capitalize names and addresses.

7. Make each row 'selectable' using the __TouchableHighlight Component__
    - Added __TouchableHighlight__ to the __UserRow Component__
    - Added an __onPress__ function to temporarily alert the users's name

8. Navigate to a __UserDetail__ View when a __UserRow__ is selected.
    - Pass an __onSelectRow__ function to the __UserRow Component__ to navigate to a UserDetail View
    - use the __navigator__ property of the __UserList__ to pass the firstName of the user as the title of the new view
    - Added a __UserDetail Component__  to serve as the view for displaying a user's information.
