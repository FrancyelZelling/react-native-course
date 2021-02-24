
import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Botao from './components/Botao';
import Contador from './components/Contador';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={style.App}>
      <Contador inicial={100} step={13}/>
      {/* <Botao /> */}
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
