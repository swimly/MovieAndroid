import React,{Component} from 'react';
import {
  View,
  TouchableNativeFeedback,
  Image,
  Text
} from 'react-native';
export default class MovieList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {item} = this.props;
    return (
      <View
        style={{width:'33.3%',alignItems:'center',padding:5,flexDirection:'column'}}
      >
        <TouchableNativeFeedback
          onPress={()=>this.props.onPress()}
        >
          <View
            style={{backgroundColor:'#fff',width:'100%',alignItems:'center',borderRadius:5}}
          >
            <Image
              style={{width:'100%',aspectRatio:0.75,borderTopLeftRadius:5,borderTopRightRadius:5}}
              source={{uri:item.Cover}}/>
            <View
              style={{backgroundColor:'rgba(0,0,0,0.6)',alignSelf:'flex-start',marginTop:-25,height:25,justifyContent:'center',paddingLeft:10,paddingRight:10,borderTopRightRadius:10}}
            >
              <Text
                style={{color:'#fff'}}
              >{item.Score}分</Text>
            </View>
            <Text
              style={{marginTop:10,marginBottom:10,fontSize:12}}
            >{item.Name}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}