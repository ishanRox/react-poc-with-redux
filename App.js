
import { StyleSheet, Text, View } from 'react-native';
import { combineReducers, createStore } from 'redux';
import countReducer from './store/reducers/counter';
import { Provider, useSelector } from 'react-redux';
import Component1 from './components/component1';
import { useState } from 'react';
import Component2 from './components/component2';

export default function App() {



  const rootReducer = combineReducers({
    counter: countReducer,
  });

  const store = createStore(rootReducer);



  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Component 0 </Text>
        <Component1 />
        {/* we can reuse like this <Component2/> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

