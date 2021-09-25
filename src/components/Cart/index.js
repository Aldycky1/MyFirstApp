import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../assets/icons/cart.png';

const Cart = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconCart: {
    width: 65,
    height: 65,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 24 / 2,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
    textAlign: 'center',
  },
});
