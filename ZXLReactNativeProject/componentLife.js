import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
} from 'react-native'

// 组件生命周期
/*
1.实例化阶段 
constructor 实例化组件
componentWillMount 加载组件
render 渲染组件
componentDidMount 加载组件完成
----创建阶段 只会调用一次 render除外

2.运行阶段
componentWillReceiveProps 每次传入Props
shouldComponentUpdate 每次props或者state改变
componentWillUpdate 即将更新 不能调用this.setState否则会导致无限循环
componentDidUpdate 更新完成

3.销毁阶段
componentWillUnmount 组件即将销毁 ---移除观察者，清空数据

*/

export default class ComponentLife extends Component{
  constructor(props){
    super(props);
    this.state = {
      age:0
    }
    
    console.log('constructor');
  }
  
  componentWillMount(){
    console.log('componentWillMount');
  }
  
  componentDidMount(){
    console.log('');
  }
  
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  
  render(){
    console.log('render');
    return (<View style={styles.lifeStyle} >
                <Text onPress={()=>{
                    var age = this.state.age;
                    age++;
                    this.setState({
                        age:age
                    });
                }}>修改state={this.state['age']}</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    lifeStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
