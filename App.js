import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetails from './Screen/ProductDetails';
import ShoppingCart from './Screen/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
 {/* <ProductDetails/> */}
 <ShoppingCart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
