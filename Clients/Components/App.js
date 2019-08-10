import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from './SignUp';
import Loading from './Loading';
import LogIn from './Login';
import UserPage from './UserPage';
import Groups from './Groups'
import AddGroupForm from './AddGroupForm';

const MainNavigator = createStackNavigator({
  Loading: { screen: Loading },
  Signup: { screen: SignUp },
  Login: { screen: LogIn },
  UserPage: { screen: UserPage },
  Groups: { screen: Groups },
  AddGroupForm: {screen: AddGroupForm}
});

const App = createAppContainer(MainNavigator);

export default App;
