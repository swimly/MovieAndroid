import React,{Component} from 'react';
import {
  View,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  Text
} from 'react-native';
export default class Drawer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {item} = this.props;
    return (
      <ScrollView
        style={{backgroundColor:'#fff'}}
      >

      </ScrollView>
    )
  }
}