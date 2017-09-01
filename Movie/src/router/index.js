import {Navigation} from 'react-native-navigation';
import RootScreen from '../screens/Root';
import MovieScreen from '../screens/Movie';

export function registerScreens () {
  Navigation.registerComponent('app.root', () => RootScreen);
  Navigation.registerComponent('app.movie', () => MovieScreen);
}