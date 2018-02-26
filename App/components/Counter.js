import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

export default class Counter extends Component {

  constructor(props){
  	super(props)
  	this.state=({
	  	num: '0'
	  })
  }
  
  render() {
    return (
    <KeyboardAvoidingView keyboardVerticalOffset ={30}>	
      <View style={{flex: 1,paddingTop: 200}}>
        <Button
          title="Up"
          onPress={()=>this.props.increment(this.state.num)}/>
        <Text style={styles.counter}>
          {this.props.count}
        </Text>
        <Button
          title="Down"
          onPress={this.props.decrement}/>
        <Button
          title="Reset"
          onPress={this.props.reset}/>
        <Button
          title="ADD"
          onPress={this.props.add}/> 
           
        	<TextInput  onChangeText={(text) => this.setState({num: text})} style={styles.textinput}/>
       
      </View>
      </KeyboardAvoidingView> 
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  textinput:{
  	width: 200,
  	height: 40,
  	backgroundColor: 'green',
  	paddingLeft: 10
  }
});