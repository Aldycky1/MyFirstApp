import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const Product = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.imageProduct} />
      <Text style={styles.productName}>New Macbook Pro 2019</Text>
      <Text style={styles.productPrice}>Rp. 22.000.000</Text>
      <Text style={styles.location}>Bekasi Selatan</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#f2994a',
  },
  location: {fontSize: 12, fontWeight: '400', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#6fcf98',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
});
