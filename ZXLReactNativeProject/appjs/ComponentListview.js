import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  AlertIOS,
} from 'react-native'

/**
1.创建数据源ListViewDataSource
2.设置数据源数据
3.实现数据源方法，确定cell
*/

export default class ComponentListView extends Component{
  constructor(props){
    super(props);
    /**
    getRowData(dataBlob, sectionID, rowID); 怎么获取行数据
    getSectionHeaderData(dataBlob, sectionID); 怎么获取每一组头部数据
    rowHasChanged(prevRowData, nextRowData); 决定什么情况行数据才发生改变，当行数据发生改变，就会绘制下一行cell
    sectionHeaderHasChanged(prevSectionData, nextSectionData);决定什么情况头部数据才发生改变，当行数据发生改变，就会绘制下一行cell
    */
    var datas = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 != r2});

    this.state = {
      // 设置数据源
      dataSource: datas.cloneWithRows(['星期一','星期二',
                                     '星期三','星期四',
                                     '星期五','星期六',
                                     '星期日']),
    };
  }

  render(){
    return(
      <View style = {{flex:1}}>
          <ListView dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator.bind(this)}
                    renderHeader={this._renderHeader.bind(this)}
                    renderFooter={this._renderFooter.bind(this)}></ListView>
      </View>
    )

  }

   // 实现数据源方法，每行cell外观
    _renderRow(rowData, sectionID, rowID, highlightRow) {
      return (
        // Cell点击高亮
        <TouchableOpacity onPress={()=>{
            AlertIOS.alert(rowID);
            highlightRow(sectionID,rowID);
          }}>
            <View style={styles.cell0}>
                <Text style={{backgroundColor:'red'}}>{rowData}</Text>
        
            </View>
        </TouchableOpacity>
          
      );
    }

  // 分割线
  _renderSeparator(sectionID,rowID,adjacentRowHighlighted){
    return (
      <View style={{height:1,backgroundColor:'black',marginLeft:8}}></View>
    )
  }
  
  // 头部视图
  _renderHeader(){
    return(
        <View style={styles.header}>
            <Text>头部视图</Text>
        </View>
    )
  }
  
  // 尾部视图
  _renderFooter(){
      return(
          <View style={styles.footer}>
              <Text>尾部视图</Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({

  cell0:{
    height:56,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:8,
  },
  cell:{
    height:56,
    backgroundColor:'red',
    marginLeft:8,
  },
  
  header:{
    backgroundColor:'red',
    marginLeft:8,
    height:28,
    justifyContent:'center',
    //alignItems:'center'
  },
  
  footer:{
    backgroundColor:'red',
    marginLeft:8,
    marginRight:88,
    height:28,
    justifyContent:'center',
    //alignItems:'center'
  }

});
