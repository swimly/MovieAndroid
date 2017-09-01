import {Navigation} from 'react-native-navigation';
import RootScreen from '../screens/Root';
import MovieScreen from '../screens/Movie';
import MovieList from '../components/MovieList';

export function registerScreens () {
  Navigation.registerComponent('app.root', () => RootScreen);
  Navigation.registerComponent('app.movie', () => MovieScreen);
  Navigation.registerComponent('app.movelist', () => MovieList);
}