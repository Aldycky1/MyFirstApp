import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const StylingComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.text}>Styling Component React Native</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          marginTop: 20,
          marginLeft: 20,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: '#f2994a',
          }}>
          Rp. 22.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '400', marginTop: 12}}>
          Bekasi Selatan
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf98',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StylingComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});
