import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Aldycky</Text>
      <LastName />
      <Text>Siesta</Text>
      <Text>Natsunagi Nagisa</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const LastName = () => {
  return <Text>Bagus Witjaksana</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini merupakan component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>
          Ini adalah gambar hewan
        </Text>
      </View>
    );
  }
}

export default SampleComponent;
