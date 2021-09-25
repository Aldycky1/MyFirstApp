import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // Tipe Data

  // primitive

  const nama = 'Aldycky Bagus'; // String
  let usia = 24; // Number
  const apakahLakiLaki = true; // Boolean

  // Complex
  const hewanPeliharaan = {
    nama: 'Miawss',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'oranye',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  }; // Object

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name}, usia anda ${age} tahun.`); // Hello Aldy, usia anda 20 tahun.
  }; // Function

  sapaOrang('Aldy', 20);

  const namaOrang = [
    'Aldycky',
    'Bagus',
    'Witjaksana',
    'Inatsa',
    'Aulia',
    'Dalila',
  ]; // object - array

  typeof namaOrang; // Object

  // jika hujan turun, maka kalau kerja bawa payung
  // jika perut lapar, maka harus makan.

  // if (hewanPeliharaan.nama === 'Miaw') {
  //   console.log('Hallo Miaw');
  // } else {
  //   console.log('Hewan siapa ini?');
  // }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';

    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallo Miaw, apa kabar?';
    // } else {
    //   hasilSapa = 'Hewan siapa ini?';
    // }

    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? `Hallo ${objectHewan.nama}, apa kabar?`
      : 'Ini hewan siapa?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>

      <Text>Nama: {nama}</Text>
      <Text>Age: {usia}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>

      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>

      <Text>======</Text>

      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
