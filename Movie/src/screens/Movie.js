import React,{Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
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
            <View
              style={{backgroundColor:'#F74C31',position:'absolute',paddingLeft:7,paddingRight:7,paddingBottom:2,paddingTop:2,borderBottomRightRadius:10}}
            >
              <Text
                style={{fontSize:12,color:'#fff'}}
              >{Year}</Text>
            </View>
          </View>
          <View
            style={{flex:2}}
          >
            <Text
              style={{fontSize:18,color:'#148FED',marginBottom:5}}
            >{Name}</Text>
            <Text
            style={{fontSize:12,color:'#999',lineHeight:18}}
          >{MovieTitle}</Text>
            <Text
              style={{fontSize:12,color:'#999',lineHeight:18}}
            >类型：{Type}</Text>
            <Text
              style={{fontSize:12,color:'#999',lineHeight:18}}
            >标签：{Tags}</Text>
            <Text
              style={{fontSize:12,color:'#999',lineHeight:18}}
            >发布时间：{moment(ReleaseDate).startOf('hour').fromNow()}</Text>
            <Text
              style={{fontSize:12,color:'#999',lineHeight:18}}
            >更新时间：{moment(UpdateTime).startOf('hour').fromNow()}</Text>
          </View>
        </View>
        <View
          style={{backgroundColor:'#fff',marginTop:5}}
        >
          <View
            style={{padding:10,borderBottomWidth:.5,borderColor:'#eee'}}
          >
            <Text
              style={{fontSize:16,color:'#148FED'}}
            >剧集</Text>
          </View>
          <ScrollView
            style={{padding:10,flexDirection:'row'}}
          >
          </ScrollView>
        </View>
        <View
          style={{backgroundColor:'#fff',marginTop:5}}
        >
          <View
            style={{padding:10,borderBottomWidth:.5,borderColor:'#eee'}}
          >
            <Text
              style={{fontSize:16,color:'#148FED'}}
            >简介</Text>
          </View>
          <View
            style={{padding:10}}
          >
            <Text
              style={{fontSize:14,lineHeight:30}}
            >{Introduction}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}