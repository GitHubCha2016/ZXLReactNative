/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';
//import NavigationBar from './root.js';
import Room from './room.js';
import ComponentLife from './componentLife.js';
import FatherComponent from './ComponentNoti.js';
import PropTypeClass from './appjs/proptypes.js';
import ComponentListView from './appjs/ComponentListview.js';
import ComponentsClass from './appjs/Components.js';

// flex
// <Text style={[styles.text0Style,styles.baseTextStyle]}>1</Text>
// <Text style={[styles.text1Style,styles.baseTextStyle]}>2</Text>
// <Text style={[styles.text2Style,styles.baseTextStyle]}>3</Text>
// <Text style={[styles.text3Style,styles.baseTextStyle]}>4</Text>

//props state
//<Room name="小明"/>

//组件生命周期
// <ComponentLife></ComponentLife>

// 组件间传值
//<FatherComponent name="小强"></FatherComponent>

// PropTypes
//<PropTypeClass></PropTypeClass>

// ListView
// <ComponentListView style={{backgroundColor:'red',height:100}}></ComponentListView>

class Project extends Component {
  render() {
    
    return (
      <View style={styles.container}>
          <ComponentsClass></ComponentsClass>
      </View>
    );
  }
}

// flex布局
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',// column 主轴方向
    flexWrap:'wrap', //nowrap 是否可以换行
    justifyContent:'space-around',//flex-start center spece-between space-around 在主轴上的具体布局
    backgroundColor: 'darkorange',
    alignItems:'center',// stretch(设置高度无效) center flex-start flex-end(侧轴默认stretch) 子组件在侧轴上具体布局
  },
  baseTextStyle:{
        //backgroundColor:'deepskyblue',
        width:50,
        height:50,
        fontSize:15,
        textAlign:'center',
        marginTop:20,
    },
  text0Style:{
    flex: 3,
    backgroundColor: 'red',
  },
  text1Style: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text2Style: {
    flex: 2,
    backgroundColor: 'orange',
  },
  text3Style: {
    //alignSelf:'flex-start',//auto flex-start flex-end center stretch 自身在侧轴上的布局
    //flex 决定子控件在主轴中占几等分
    flex: 1,
    backgroundColor: 'green',
  }
});

AppRegistry.registerComponent('Project', () => Project);
