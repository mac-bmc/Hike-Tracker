import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SignUpScreen from './src/screens/AuthScreen/SignUpScreen';
import SignInScreen from './src/screens/AuthScreen/SignInScreen';
import AccountScreen from './src/screens/AuthScreen/AccountScreen';
import TrackCreateScreen from './src/screens/AppScreens/TrackCreateScreen';
import TrackListScreen from './src/screens/AppScreens/TrackListScreen';
import TackViewScreen from './src/screens/AppScreens/TackViewScreen';
import SplashScreen from './src/screens/AppScreens/SplashScreen'
import { Provider as AuthProvider } from './src/context-providers/AuthContextProvider';
import { Provider as LocationProvider } from './src/context-providers/LocationContext';
import { Provider as TrackProvider } from './src/context-providers/TrackContext';
import { setNavigator } from './src/refs/NavRefs';
import { FontAwesome6 } from '@expo/vector-icons';


const viewTrack = createStackNavigator({
  TrackListScreen: TrackListScreen,
  TackViewScreen: TackViewScreen
})

viewTrack.navigationOptions = () => {
  return {
    title:"Tracks",
    tabBarIcon: () => (
      <FontAwesome6 name="list-ul" size={24} color="white" />
    ),
  };
};

const tabNavigator = createMaterialBottomTabNavigator({
    
  viewTrack: viewTrack,
  TrackCreateScreen: TrackCreateScreen,
  AccountScreen: AccountScreen,
})

tabNavigator.navigationOptions =() =>{
  return{
    tabBarOptions:{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
}

const switchNavigator = createSwitchNavigator({
  splash: SplashScreen,
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,

  }),
  appFlow: tabNavigator
});
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}

