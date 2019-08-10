import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';
import styles from './Style';
import { firestore } from '../../fire';

const UserPage = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.userPage}>Welcome</Text>
      <Button
        style={styles.userPage}
        onPress={() => {
          alert('groups');
        }}
        title="Groups"
        color="white"
      />
    </View>
  );
};
export default UserPage;
