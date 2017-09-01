import React,{Component} from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import MovieList from '../components/MovieList';
import {platform} from '../global';
export default class RootScreen extends Component {
  static navigatorButtons = {
    leftButtons: [{
      id: 'menu',
      icon: platform == 'android' ? require('../assets/images/android/menu.png') : require('../assets/images/ios/menu.png')
    }],
    rightButtons: [{
      id: 'search',
      icon: platform == 'android' ? require('../assets/images/android/search.png') : require('../assets/images/ios/search.png')
    }]
  }
  constructor (props) {
    super(props)
    this.state = {
      list: []
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  _menu () {
    console.log(this)
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  }
  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      switch (event.id) {
        case 'menu':
          this._menu();
          break;
      }
    }
  }
  componentWillMount() {
    this._List();
  }
  _List () {
    fetch('http://api.skyrj.com/api/movies?pageSize=18&pageIndex=1&orderBy=Score')
    .then(res => {
      res.json().then(res=>{
        console.log(res)
        this.setState({
          list: res
        })
      })
    })
  }
  render () {
    const list = this.state
    return (
      <ScrollView>
        <View
          style={{flex:1,flexDirection:'row',flexWrap:'wrap',padding:5}}
        >
          {
            this.state.list.map((item, index) => (
              <MovieList 
              item={item} 
              key={index}
              onPress = {()=>{this.props.navigator.push({screen: 'app.movie',title: item.Name,animationType: 'slide-horizontal',passProps: item});}}
              />
            ))
          }
        </View>
      </ScrollView>
    )
  }
}