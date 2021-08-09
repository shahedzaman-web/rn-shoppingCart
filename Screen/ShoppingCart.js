import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { RadioButton } from 'react-native-paper';
import ProductCart from "../components/ProductCart";

export default function ShoppingCart() {
  const [checked, setChecked] = useState('delivery');
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.spaceBetween]}>
       <TouchableOpacity>
       <Entypo name="cross" size={24} color="black" />
       </TouchableOpacity>
 <TouchableOpacity>
 <Text style={styles.defaultText}>Edit</Text>
 </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Shopping Cart</Text>
      </View>
      <View style={styles.col}>
        <ProductCart
          img={require("./../images/broccoli.png")}
          productType="Vegetables"
          productName="Broccoli"
          qty="1"
          price="100"
        />
        <ProductCart
          img={require("./../images/carrots.png")}
          productType="Vegetables"
          productName="Carrot"
          qty="1"
          price="100"
        />
        <ProductCart
          img={require("./../images/broccoli.png")}
          productType="Fruits"
          productName="Apple"
          qty="1"
          price="100"
        />
      </View>
      <View style={[styles.row, styles.spaceBetween, styles.couponContainer]}>
        <Text style={styles.defaultText}>Coupon Code</Text>
        <Text style={styles.defaultText}>Your Code</Text>
      </View>
      <View>
        <View style={styles.row}>
          <View style={[styles.checkbox,styles.row]}>
          <RadioButton
          color= "#8757f7"
        value="pickup"
        status={ checked === 'pickup' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('pickup')}
      />
            <Text>Pickup</Text>
          </View>
  
          <View style={[styles.checkbox,styles.row]}>
          <RadioButton
            color= "#8757f7"
        value="delivery"
        status={ checked === 'delivery' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('delivery')}
      />
       
            <Text>Delivery</Text>
          </View>
          
        </View>
      </View>
      <View>
        <View style={[styles.row, styles.spaceBetween,styles.spaceVertical]}>
          <Text style={styles.defaultText}>Delivery Fee</Text>
          <View style={styles.row}>
            <FontAwesome name="rupee" size={20} color="black" />
            <Text style={styles.defaultText}>50.00</Text>
          </View>
        </View>
        <View style={[styles.row, styles.spaceBetween,styles.spaceVertical]}>
          <Text style={styles.defaultText}>Total Price</Text>
          <View style={styles.row}>
            <FontAwesome name="rupee" size={24} color="black" />
            <Text style={styles.defaultText}>350.00</Text>
          </View>
        </View>
        <View style={[styles.row, styles.spaceBetween,styles.spaceVertical]}>
          <Text>3 items</Text>
          <Text>Inclusive Taxes</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkoutContainer}>
        <Text style={[styles.defaultText, styles.textWhite]}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 10,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  spaceBetween: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  defaultText: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 32,
  },
  titleContainer: {
    borderBottomColor: "black",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  couponContainer: {
    backgroundColor: "#DDDDDD",
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 6,
    marginVertical: 6,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  checkoutContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8757f7",
    borderRadius: 6,
    shadowRadius: 10,
    shadowOpacity: 0.4,
    marginTop: 10,
  },textWhite:{
    color: "white"
  },spaceVertical:{
    paddingVertical: 10
},checkbox:{
  marginVertical: 20,
  width: "45%",padding: 10, margin: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10 
}
});
