import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
} from 'react-native'

export default class Room extends Component{
  
  timeUpdate(){
      var number = this.state.num;
      
      number ++;
      
      this.setState({
        num: number
      })
    }
    // State：如果以后想修改某个属性，就修改界面，就需要用state。
    constructor(props){
      super(props);
      
      // 定义state属性
      this.state = {
        num: 1,
      };
      
      console.log("初始化对象");
      
      // 创建定时器
      // 这里必须绑定,bind会生成了一个新的函数,并且由绑定者调用,否则this不明确
      setInterval(this.timeUpdate.bind(this),1000);
    }
  
    render () {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>欢迎{this.props.name}同学加入我们团队！</Text>
          <Text>观众数{this.state.num}</Text>
          
        </View>
      );
    }
}

const styles = StyleSheet.create ({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  textStyle:{
    marginTop: 20,
  }
});