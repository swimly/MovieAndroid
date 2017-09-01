import React,{Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text
} from 'react-native';
import moment from 'moment';
import axios from 'axios';
export default class MovieScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {}
    }
  }
  componentDidMount () {
    this._info();
  }
  componentWillMount() {
    this._info();
    this.cancelable && this.cancelable.cancel();
  }
  _info () {
    const {ID, DBID} = this.props
    const url = 'http://api.skyrj.com/api/movies/'+ID;
    axios.get(url)
    .then(res=>{
      console.log(res,5485485)
      this.setState({
        info: res.data
      })
    }) 
  }
  render () {
    const {Cover, ID, Introduction, IsDisplay, MovieDownUrls, MoviePlayUrls, MovieTitle, Name, ReleaseDate,Tags,Type,UpdateTime,Year} = this.state.info
    return (
      <ScrollView>
        <View
          style={{backgroundColor:'#fff',padding:10,flexDirection:'row'}}
        >
          <View
            style={{flex:1}}
          >
            <Image source={{uri: Cover}} style={{width:100,aspectRatio:0.75}}/>
          </View>
          <View
            style={{flex:2}}
          >
            <Text>{Name}</Text>
            <Text>类型：{Type}</Text>
            <Text>标签：{Tags}</Text>
            <Text>发布时间：{moment(ReleaseDate).startOf('hour').fromNow()}</Text>
            <Text>更新时间：{moment(UpdateTime).startOf('hour').fromNow()}</Text>
          </View>
        </View>
        <View>
          <Text>{Introduction}</Text>
        </View>
      </ScrollView>
    )
  }
}