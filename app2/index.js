// Imports
import React from 'react';
import {AppRegistry, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

// Formatacoes
const Estilos = {
  principal: {
    // backgroundColor: '#538530',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }

};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.floor(Math.random() * 5);

  var frases = Array();
  frases[0] = 'Namora comigo. Eu sei fazer pão com mortadela.';
  frases[1] = 'Mas se você for fogo, eu posso ser fumaça.';
  frases[2] = 'Faltou um dedinho para que Lula fosse solto.';
  frases[3] = 'Quem tem "Ré" é violão.';
  frases[4] = 'Beba como se fosse morrer, porque você vai.';

  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(fraseEscolhida);

};

// Criar o componente
const App = () => {

  const {principal, botao, textoBotao} = Estilos;

  return (
    <View style={principal}>

      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity onPress={gerarNovaFrase} style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>

    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
