/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { black } from 'ansi-colors';
//import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  state = {
    display: []
  }

  render() {
    let displayValue = this.state.display;
    return (
      <View style={styles.container}>
        <View style={styles.name}>
        </View>
        
        
        <View style= {{flexDirection: 'row'}}>
        <View style={styles.numberpad}>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'justify' }}>{this.state.display}</Text>
        </View> 

          <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-end'}}>
          <TouchableOpacity style={{backgroundColor: 'grey' }} onPress={() => {
            this.setState({ display: displayValue.slice(0, displayValue.length - 1) })
          }}>  
           <Text style={{fontSize: 16}}>Remove</Text> 
          </TouchableOpacity>
          </View>
          </View>

        <View style={styles.keypad1}>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 1] })

          }}>
            <Text style={styles.number}>1</Text>


          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 2] })

          }}>
            <Text style={styles.number}>2</Text>
            <Text style={styles.letters}>ABC</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 3] })

          }}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.letters}>DEF</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.keypad1}>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 4] })

          }}>
            <Text style={styles.number}>4</Text>
            <Text style={styles.letters}>GHI</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 5] })

          }}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.letters}>JKL</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 6] })

          }}>
            <Text style={styles.number}>6</Text>
            <Text style={styles.letters}>MNO</Text>

          </TouchableOpacity>
        </View>

        <View style={styles.keypad1}>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 7] })

          }}>
            <Text style={styles.number}>7</Text>
            <Text style={styles.letters}>PQRS</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 8] })

          }}>
            <Text style={styles.number}>8</Text>
            <Text style={styles.letters}>YUV</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 9] })
          }}>
            <Text style={styles.number}>9</Text>
            <Text style={styles.letters}>WXYZ</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.keypad1}>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, '*'] })
          }}>
            <Text style={styles.number}>*</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, 0] })
          }}>
            <Text style={styles.number}>0</Text>
            <Text style={styles.letters}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ display: [...displayValue, '#'] })
          }}>
            <Text style={styles.number}>#</Text>

          </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {
    flex: 1,
    height: 100,
    backgroundColor: 'green',
    alignItems: 'center',
    margin: 0.5,

    //border: 10,
    justifyContent: 'center'

  },

  name: {
    flex: 1,
  },

  numberpad: {
   flexDirection: 'row',
    flex:5,
    
  },
  keypad1: {

    flexDirection: 'row',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white'
  },
  number: {

    fontSize: 35,
  },

  letters: {

    fontSize: 11,

  },

});
