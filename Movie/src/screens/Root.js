import React,{Component} from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import MovieList from '../components/MovieList';
export default class RootScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
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