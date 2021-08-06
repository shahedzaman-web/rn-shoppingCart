import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetails from './Screen/ProductDetails';

export default function App() {
  return (
    <View style={styles.container}>
 <ProductDetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
