import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class HomeCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // if (nextState.counter === 1) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is HOME Class Component</Text>
        <Text style={styles.title}>{`Count is ${this.state.counter}`}</Text>

        <TouchableOpacity
          onPress={() => this.increaseCounter()}
          style={styles.btn}>
          <Text style={styles.title}>Add +1 to count</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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

export default HomeCC;
