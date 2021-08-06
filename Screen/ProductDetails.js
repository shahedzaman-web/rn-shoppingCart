import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Product Details</Text>
        <TouchableOpacity>
          <FontAwesome5 name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.productImageView}>
        <Image
          style={styles.productImage}
          source={require("./../images/broccoli.png")}
        />
      </View>
      <View style={styles.productInfoView}>
        <View style={styles.productFeaturesContainer}>
          <Text style={styles.productFeaturesText}>Best Deal</Text>
        </View>
        <Text style={styles.productTypeText}>Vegetable</Text>
        <Text style={styles.productNameText}>Broccoli</Text>
        <View style={styles.priceContainer}>
          <View style={styles.crossLine}>
            <FontAwesome name="rupee" size={16} color="black" />
            <Text>200.00</Text>
          </View>
          <View style={styles.priceContainer}>
            <FontAwesome name="rupee" size={16} color="black" />
            <Text>100.00</Text>
          </View>
        </View>
        <View>
          <Text style={styles.descriptionText}>Description</Text>
          <Text>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur

            adip
          </Text>
        </View>
        <View>
          <Text style={styles.relatedItemsText}>Related Items</Text>
          <View style={styles.relatedItemsContainer}>
            <TouchableOpacity style={styles.relatedItemContainer}>
              <Image
                style={styles.relatedItemImg}
                source={require("./../images/apple.png")}
              />
              <View style={styles.relatedItemTextContainer}>
                <Text>Apple</Text>
                <View style={styles.priceContainer}>
                  <FontAwesome name="rupee" size={16} color="black" />
                  <Text>100.00</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.relatedItemContainer}>
              <Image
                style={styles.relatedItemImg}
                source={require("./../images/carrots.png")}
              />
              <View style={styles.relatedItemTextContainer}>
                <Text>Carrots</Text>
                <View style={styles.priceContainer}>
                  <FontAwesome name="rupee" size={16} color="black" />
                  <Text>200.00</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.addToCartView}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingTop: 36,
  },
  topView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 24,
  },
  productImageView: {
    backgroundColor: "#e6e9ff",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    margin: 24,
  },
  productFeaturesContainer: {
    borderRadius: 10,
    backgroundColor: "#8757f7",
    width: "24%",
  },
  productFeaturesText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "white",
    textAlign: "center",
  },
  productTypeText: {
    fontSize: 20,
    paddingTop: 6
  },
  crossLine: {
    textDecorationLine: "line-through",
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },
  productNameText: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  productImage: {
    width: 200,
    height: 200,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },
  descriptionText: {
    fontSize: 20,
    paddingVertical: 6,
  },
  relatedItemsText: {
    fontSize: 20,
    marginVertical: 10,
  },
  relatedItemsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 230,
  },
  relatedItemContainer: {
    display: "flex",
    width: "50%",
    height: 230,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FAFF",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginRight: 10
  },
  relatedItemImg: {
    paddingTop: 2,
    backgroundColor: "transparent",
    width: "75%",
    height: 190,
  },
  relatedItemTextContainer: {
    paddingLeft: 6,
    marginVertical: 6,
  },
  addToCartView: {
    height: 30,
    backgroundColor: "#8757f7",
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartText: {
    paddingTop: 5,
    textAlign: "center",
    color: "white",
  },
});
