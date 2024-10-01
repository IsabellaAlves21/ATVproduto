// Importa os módulos necessários do React e React Native
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
const Form = () => {
  // Definimos estados para armazenar os valores dos campos
  const [codigo, setCodigo] = useState('');//useState serve para modificar o valor de uma variavel
  const [nome, setNome] = useState('');
  const [custo, setCusto] = useState('');
  const [venda, setVenda] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [tipo, setTipo] = useState('');

  // Função chamada ao submeter o formulário
const Enviar = () => {
  // Exibe um alerta com os valores inseridos no formulário
Alert.alert('Dados Submetidos', `Codigo: ${codigo}\nNome: ${nome}\nCusto: ${custo}\nVenda: ${venda}\nQuantidade: ${quantidade}\nTipo: ${tipo}`);
};

return(
  <View style={styles.container}>
    <Text>Nome:</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o código"
    value={nome}
    onChangeText={setNome} 
    />
    <Text>Código:</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o código"
    value={codigo}
    onChangeText={setCodigo}
    />
    <Text>Custo:</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o valor de custo"
    value={custo}
    onChangeText={setCusto} 
     keyboardType="numeric"
    />
    <Text>Venda:</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o valor da venda"
    value={venda}
    onChangeText={setVenda} 
    keyboardType="numeric"
    />
    <Text>Quantidade:</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite a quantidade"
    value={quantidade}
    onChangeText={setQuantidade} 
    keyboardType="numeric"
    />
    <Text>Tipo:</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o Tipo"
    value={tipo}
    onChangeText={setTipo} 
    />
    <Button title="Enviar" onPress={Enviar} />
   </View> 
);
};
// Estilos usados no formulário
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  botaoSecundario:{
    borderWidth: 2,
    borderColor: '#298069',
    backgroundColor:'#3498db',
    alignItems:"center",
    borderRadius:8,
    paddingVertical:10,
  },
});

// Exporta o componente para ser utilizado
export default Form;
