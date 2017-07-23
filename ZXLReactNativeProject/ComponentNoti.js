import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native'

// 子组件
/**
1. 顺传---通过props传值、有时候需要拿到组件传值，通过ref拿到控件给控件传值
2. 逆传---使用方法回调
3. 通知---无关联组件
*/

class SonComponent extends Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      money:0
    }
  }
  
  receiveMoney(money){
    this.setState({
      money:money
    });
  }
  
  sendMoneyToFather(money){
    this.props.sendMoney(money);
  }
  render(){
    return(
      <View>
        <View style={styles.viewStyle}>
          <Text>我的名字叫{this.props.name}</Text>
          <Text>我有{this.state.money}元生活费</Text>
        </View>
        <Text style={{marginTop:20}} onPress={this.sendMoneyToFather.bind(this,100)}>赚了一百元钱，还给老爸</Text>
        <Text style={{marginTop:20}} onPress={()=>{
            DeviceEventEmitter.emit('makeMoney',100)
          }}>通知:我给100元钱给老爸</Text>
      </View>
      
    );
  }
}

// 父组件
export default class FatherComponent extends Component{
  
  constructor(props){
    super(props);
    
    this.state={
      money:0
    };
  }
  
  sendMoney(money){
    var m = this.state.money;
    m += money;
    this.setState({
      money:m
    });
  }
          
  componentDidMount() {
    // 定义属性,但是对这个属性的修改不会触发render
        this.lister = DeviceEventEmitter.addListener('makeMoney',(money)=>{
          this.sendMoney(money);
        });
  }
  
    render (){
        return (
            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{marginBottom:100}} onPress={()=>{
                  this.refs.son.receiveMoney(1000);
              }}>发生活费</Text>
              <SonComponent ref="son" name={this.props.name} sendMoney={this.sendMoney.bind(this)}></SonComponent>
            
            <Text style={{marginTop:100}}>父亲还有{this.state.money}元钱</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
      flex: 1,
      width:180,
      height:30,
      justifyContent:'center',// 主轴
      alignItems:'center',// 侧轴
      backgroundColor: 'red',
    }
});


