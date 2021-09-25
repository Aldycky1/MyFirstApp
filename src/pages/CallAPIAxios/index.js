import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIAxios = () => {
  const [userData, setUserData] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
  });

  const [jobData, setJobData] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(result => {
        setUserData(result.data.data);
      })
      .catch(err => console.log('err: ', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Aldy',
      job: 'Software Developer',
    };

    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then(result => {
        setJobData(result.data);
      })
      .catch(err => console.log('err: ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      {userData.avatar.length > 0 && (
        <Image
          source={userData.avatar ? {uri: userData.avatar} : null}
          style={styles.avatar}
        />
      )}
      <Text>{`${userData.first_name} ${userData.last_name}`}</Text>
      <Text>{userData.email}</Text>

      <View style={styles.line} />

      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{jobData.name}</Text>
      <Text>{jobData.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 10},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
