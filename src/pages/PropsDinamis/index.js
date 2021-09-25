import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            gambar="https://placeimg.com/70/70/arch"
            judul="Youtube Channel"
          />
          <Story
            gambar="https://placeimg.com/70/70/tech"
            judul="Kelas Online"
          />
          <Story
            gambar="https://placeimg.com/70/70/animals"
            judul="Cutie Animal"
          />
          <Story
            gambar="https://placeimg.com/70/70/nature"
            judul="Beautiful Nature"
          />
          <Story gambar="https://placeimg.com/70/70/people" judul="Cute Girl" />
          <Story
            gambar="https://placeimg.com/70/70/people/grayscale"
            judul="Grayscale"
          />
          <Story
            gambar="https://placeimg.com/70/70/people/sepia"
            judul="Sepia"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
