import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SignUpScreen from './src/screens/AuthScreen/SignUpScreen';
import SignInScreen from './src/screens/AuthScreen/SignInScreen';
import AccountScreen from './src/screens/AppScreens/AccountScreen';
import TrackCreateScreen from './src/screens/AppScreens/TrackCreateScreen';
import TrackListScreen from './src/screens/AppScreens/TrackListScreen';
import TackViewScreen from './src/screens/AppScreens/TackViewScreen';
import React from 'react'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({

    SignUp: SignUpScreen,
    SignIn: SignInScreen,

  }),
  appFlow: createMaterialBottomTabNavigator({
    AccountScreen: AccountScreen,
    TrackCreateScreen: TrackCreateScreen,
    viewTrack: createStackNavigator({
      TrackListScreen: TrackListScreen,
      TackViewScreen: TackViewScreen
    })
  })
});

export default createAppContainer(switchNavigator);
