import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Testes from '../../assets/images/undraw_Welcome_re_h3d9.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Menggunakan SVG di dalam React Native
      </Text>
      <Testes width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
