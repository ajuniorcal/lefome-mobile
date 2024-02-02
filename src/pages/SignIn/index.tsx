import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'

import {AuthContext } from '../../contexts/AuthContext'


export default function SignIn(){
    const {signIn, loadingAuth} = useContext(AuthContext)

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    async function handleLogin(){
        if(email === '' || password === ''){
            return;
        }
        await signIn({email, password})
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />

            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Digite seu e-mail'
                    style={styles.input}
                    placeholderTextColor="#f0f0f0"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput 
                    placeholder='Vem de senha'
                    style={styles.input}
                    placeholderTextColor="#f0f0f0"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color="#fff"/>
                    ):(
                        <Text style={styles.buttonText}>
                        Acessar
                        </Text>
                    )}
                    
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101026'
    },
    logo:{
        marginBottom: 18,
        width: 200,
        height: 200
        
    },

    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 34,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#101035',
        marginBottom:12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff'

    },

    button:{
        width: '95%',
        height: 40,
        backgroundColor: '#928c56',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems:  'center'

    },

    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f0f0f0'
    }

})