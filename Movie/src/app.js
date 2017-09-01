import {Navigation} from 'react-native-navigation';
import {registerScreens} from './router';
registerScreens();


Navigation.startSingleScreenApp({
  screen: {
    screen: 'app.root',
    title: '推荐'
  },
  drawer: {
    left: {
      screen: 'app.drawer'
    },
    style: {},
    type: 'TheSideBar',
    animationType: 'slide'
  },
  appStyle: {
    orientation: 'portrait',
    navBarTextColor: '#fff',
    navBarBackgroundColor: '#148FED',
    navBarButtonColor: '#fff',
    drawUnderNavBar: true,
    statusBarTextColorScheme: 'light',
    statusBarColor: '#148FED',
    screenBackgroundColor: '#F1F1F1',
    collapsingToolBarImage: 'http://lorempixel.com/400/200/',
    topBarElevationShadowEnabled: false
  }
})