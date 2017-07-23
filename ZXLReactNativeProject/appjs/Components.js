import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ListView,
  Image,
  TouchableOpacity,
  AlertIOS,
} from 'react-native'

//View  没有点击事件

// TouchableOpacity 点击控件 
/**
onLongPress function ：长按的时候调用

onPress function ：点击的时候调用

onPressIn function ：手指按下的时候调用

onPressOut function ：手指抬起的时候调用

*/

// <TouchableOpacity activeOpacity={0.7} disabled={false}>
//             <View style={styles.rootView}>
//                 <Text>可以点击的View</Text>
//             </View>
//         </TouchableOpacity>

export default class ComponentsClass extends Component{
    render(){
      return(
        <View style={styles.rootView}>
            <Text onPress={()=>{
                AlertIOS.alert("文字被点击了!");
            }}
                  style={styles.text}
                  numberOfLines={2}
                  selectable={true}>这是文字也可以点击,看是否换行！换行。换行。</Text>
          
            <TextInput
                style={styles.textInput}
                autoFocus={false}// 自动获得焦点
                blurOnSubmit={true}// 回车点击
                editable={true}// 是否可以编辑
                keyboardType={"default"}//"default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'
                maxLength={5}
                multiline={true}// 多行输入
                placeholder={"用户名"}
                placeholderTextColor={"red"}
                returnKeyType={"done"}//'done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo'
                secureTextEntry={"true"}// 是否安全输入
                selectionColor={"blue"}// 光标颜色
                clearButtonMode={"while-editing"}//'never', 'while-editing', 'unless-editing', 'always'
                clearTextOnFocus={true}// 获得焦点的时候清除文本
                enablesReturnKeyAutomatically={true}// 没有文字的是否禁止回车
                onBlur={()=>{
                     AlertIOS.alert("输入框失去焦点");
                 }}
                 onChangeText={(text)=>{
                      AlertIOS.alert("文字改变");
                 }}
                 onEndEditing={()=>{
                      AlertIOS.alert("输入框结束编辑");
                 }}
                 onFocus={()=>{
                      AlertIOS.alert("输入框获得焦点");
                 }}
                 onSubmitEditing={()=>{
                      AlertIOS.alert("点击提交按钮");
                 }}
              ></TextInput>
          
            <Image style={styles.Image}
                    source={require('./image.jpg')}
                    blurRadius={5}//图片模糊
                    //defaultSource={uri:"./place.jpg",width:200,height:100,scale:1}
                    resizeMode:{}// 'cover', 'contain', 'stretch', 'repeat', 'center'
              ></Image>
        </View>
        
      );
    }
}

const styles = StyleSheet.create({
    rootView:{
        width:300,
        height:400,
        justifyContent:'center',
        backgroundColor:'red', 
        alignItems:'center',
    },
    
    text:{
        flex:3,
        color:'blue',
        fontSize:18,
        fontWeight:'bold',//enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
        lineHeight:18,// 行高
        textAlign:'right'//'auto', 'left', 'right', 'center', 'justify'
    },
  
    button:{
      width:100,
      height:30,
    },
  
    textInput:{
        backgroundColor:'white',
        flex:1,
        height:30
    },
    
    Image:{
      flex:2,
      backgroundColor:'green',
      width:200,
    }
});