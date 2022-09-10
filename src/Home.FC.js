import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeFC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is HOME Functional Component</Text>
      <Text style={styles.title}>{`Count is ${counter}`}</Text>

      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={styles.btn}>
        <Text style={styles.title}>Add +1 to count</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  btn: {
    padding: 10,
    backgroundColor: 'yellow',
  },
});

export default HomeFC;
