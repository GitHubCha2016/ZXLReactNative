import React, { Component ,PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

// PropTypes
// 可以实现类型检查，当传入错误的属性值，会报警告
// 定义的属性，在外界使用的时候会有提示

// ---- PropTypes必须要用static声明，否则无效果  static用来定义类方法 类属性
// ---- PropTypes只能用于React框架的自定义组件

/**
1、导入
2、使用
# 数组类型
PropTypes.array

# 布尔类型
PropTypes.bool

# 函数类型
PropTypes.func

# 数值类型
PropTypes.number

# 对象类型
PropTypes.object

# 字符串类型
PropTypes.string

# 规定prop为必传字段
PropTypes.func.isRequired

# prop可为任意类型
PropTypes.any.isRequired
*/



export default class PropTypeClass extends Component{
  // 订阅类属性类型，检查属性类型
    static propTypes = {
      name: PropTypes.string,
      age: PropTypes.number
    }

    // 给定义属性设置初始化值
    static defaultProps = {
      name: 'xmg',
      age: 20
    }
    
    render() {
      // 打印出来, xmg
      console.log(this.props.name);
      return (
        <View>
        
        </View>
      );
    }
}