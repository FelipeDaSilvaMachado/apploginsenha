import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList, StyleSheet } from 'react-native'; //TouchableOpacity
import { Card, Text, IconButton } from 'react-native-paper';


export default function Home({ navigation }) {
  const [registro, setRegistros] = useState([]);

  useEffect(() => {
    fetchAppLoginSenha(setRegistros);
  }, []);

  const handleCancel = (id) => {
    Alert.alert(
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Deletar', onPress: () => CloseEvent },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={registro}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              {/* Coluna da esquerda: texto */}
              <View style={styles.infoColumn}>
                {/* <Text style={styles.title}>Código: {item.id}</Text> */}
                <Text>Email: {item.email}</Text>
                <Text>Senha: {item.senha}</Text>
              </View>

              {/* Coluna da direita: botões */}
              <View style={styles.actionsColumn}>
                <IconButton
                  icon="pencil"
                  size={24}
                  iconColor="#3498db"
                  onPress={() => navigation.navigate('Logar', { Estoque: item })}
                />
                <IconButton
                  icon="cancel"
                  size={24}
                  iconColor="#e74c3c"
                  onPress={() => handleCancel(item.id)}
                />
              </View>
            </View>
          </Card>
        )}
      />

      {/* <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 5,
    elevation: 3,
    borderRadius: 8,
    backgroundColor: '#e5e5e5',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  infoColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  actionsColumn: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
//   floatingButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: '#27ae60',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
  plusIcon: {
    color: '#e5e5e5',
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 2,
  },
});