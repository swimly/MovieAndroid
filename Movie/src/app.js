import {Navigation} from 'react-native-navigation';
import {registerScreens} from './router';
registerScreens();


Navigation.startSingleScreenApp({
  screen: {
    screen: 'app.root',
    title: '首页'
  },
  drawer: {
    left: {
      screen: 'app.movie'
    }
  }
})