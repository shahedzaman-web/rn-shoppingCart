import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const ProductCart = ({ img, productType, productName, qty, price }) => {
  return (
    <View style={[styles.row, styles.productContainer, styles.spaceBetween, styles.spaceVertical]}>
      <View style={styles.row}>
        <View style={styles.productImgContainer}>
          <Image style={styles.productImg} source={img} />
        </View>
        <View style={[styles.col]}>
          <Text style={[styles.defaultText, styles.textColor]}>
            {productType}
          </Text>
          <Text style={[styles.defaultText]}>{productName}</Text>
          <Text style={styles.qtyText}>Qty: {qty}</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={[styles.row, styles.viewMargin]}>
          <FontAwesome name="rupee" size={16} color="black" />
          <Text style={styles.defaultText}> {price}</Text>
        </View>
        <View style={styles.row}>
          <AntDesign name="minuscircleo" size={24} color="gray" />
          <Text style={[styles.defaultText, styles.textSpace]}>{qty}</Text>
          <AntDesign name="pluscircle" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  productContainer: {
    borderBottomColor: "gray",
    paddingVertical: 4,
    borderBottomWidth: 1,
  },
  productImgContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginRight: 10,
    borderBottomColor: "black",
    borderWidth: 1,
    width: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
    alignItems: "center",
  },spaceVertical:{
      paddingVertical: 16
  },
  productImg: {
    padding: 5,
    width: 50,
    height: 50,
  },
  defaultText: {
    fontSize: 20,
  },qtyText:{
      fontSize:16,
      paddingVertical:6
  },
  viewMargin: {
    marginLeft: 20,
  },
  textColor: {
    color: "#8757f7",
  },
  textSpace: {
    paddingHorizontal: 10,
  },
});
