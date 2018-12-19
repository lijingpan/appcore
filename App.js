/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
 
import { Card, ListItem } from 'react-native-elements'
import { List, } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker';
import { PricingCard } from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
 
import { StyleSheet, Text, View, ImageBackground, Dimensions, NativeModules } from 'react-native';
import { Input, Button,Header } from 'react-native-elements'
const {  PayPal,appupder } = NativeModules;
const pay = () => {
   PayPal.initialize(PayPal.SANDBOX, "AXi8vcVq2cSekSwpZHg_O9CIJeZHcQkyBemD_KtLexASuIptgxzd9HjDfLN3OM-Ow2U6vg_6h6B601jJ");
        PayPal.pay({
            price: '10',
            currency: 'USD',
            description: '订单支付',
        }).then(confirm => console.log(confirm))
            .catch(error => console.log(error));
};
const updateapp = () => {
    appupder.CheckUpder();
};

export default class App extends Component  {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <View style={styles.container}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <View>
            <Button
              onPress={pay}
              title="PayPal支付"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>

           <View>
            <Button
              onPress={updateapp}
              title="检查app是否更新"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
   
});