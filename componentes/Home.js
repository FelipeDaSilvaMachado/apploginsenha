import React from "react";
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        Seja bem-vindo ao Diário de Obras!
      </Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Button
        title="Cadastre-se"
        onPress={() => navigation.replace('Cadastro')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  }
});

export default Home;