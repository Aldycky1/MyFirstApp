import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
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

  useEffect(() => {
    // Call API Method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // Call API Method POST
    // const dataForAPI = {
    //   name: 'Aldy',
    //   job: 'Software Engineer',
    // };
    // console.log('data object: ', dataForAPI);
    // console.log('data stringify: ', JSON.stringify(dataForAPI));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => console.log('post response: ', json));
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setUserData(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Aldy',
      job: 'Software Engineer',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response: ', json);
        setJobData(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image
        source={userData.avatar ? {uri: userData.avatar} : null}
        style={styles.avatar}
      />
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

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 10},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
