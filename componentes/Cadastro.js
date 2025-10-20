import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from './Firebase';

const Cadastro = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [bio, setBio] = useState('');

    const handleCadastro = async () => {
        try {
            const credencialUsuario = await createUserWithEmailAndPassword(auth, email, senha);
            const usuario = credencialUsuario.user;

            await setDoc(doc(db, 'users', usuario.uid), {
                nome,
                bio,
            });

            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!', [
                {
                    text: 'OK',
                    onPress: () => navigation.replace('Login')
                }
            ])
        } catch (err) {
            Alert.alert('Erro', 'Não foi possível cadastrar, tente novamente!');
        }
    };

    return (
        <View
            style={styles.container}
        >
            <Text>
                Cadastro
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder='Bio'
                value={bio}
                onChangeText={setBio}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <Button
                title="Cadastrar"
                onPress={handleCadastro}
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
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        marginVertical: 5,
    },
});

export default Cadastro;