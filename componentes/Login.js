import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { signInWithEmailAndPassowrd, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassowrd(auth, email, senha);
            navigation.replace('Home');
        } catch (err) {
            setErro('Erro ao fazer login. Verifique os dados inseridos!');
        }
    };

    const handleSenhaReset = async () => {
        if (!email) {
            Alert.alert('Informe seu email para recuperar a senha!');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Sucesso', 'Email para recuperar a senha foi enviado, verifique sua caixa de entrada!');
        } catch (err) {
            Alert.alert('Erro', 'Não foi possivel enviar o email de recuperação de senha!');
        }
    };

    return (
        <View style={styles.container}>
            <Text>
                Login!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            {erro ? <Text style={styles.erro}>{erro}</Text> : null}
            <Button
                title='Entrar'
                onPress={handleLogin}
            />
            <Button
                title='Cadastrar'
                onPress={() => navigation.navigate('Cadastro')}
            />
            <Button
                title='Esqueci a senha'
                onPress={handleSenhaReset}
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

    erro: {
        color:'red',
        fontWeight: 'bold',
    },
});

export default Login;