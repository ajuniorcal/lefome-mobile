import React, {useState} from "react"
import {View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

/* import {AuthContext} from '../../contexts/AuthContext' */
import { useNavigation } from '@react-navigation/native'

import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackPromisseList} from '../../routes/app.routes'
import {api} from '../../services/api'

export default function Dashboard(){
    /* const {signOut} = useContext(AuthContext); */
    const navigation = useNavigation<NativeStackNavigationProp<StackPromisseList>>();
    const [number, setNumber] = useState('');


    async function openOrder(){
        if(number === ''){
            return;
        }
        
        const response = await api.post('/order', {
            table: Number(number)
        } )
        
        /* console.log(response.data); */

        navigation.navigate('Order', {number: number, order_id: response.data.id})
        setNumber('')

    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Novo Pedido</Text>

            <TextInput 
                placeholder="Número da mesa"
                placeholderTextColor="#F0F0F0"
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
            />

            <TouchableOpacity style={styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir mesa</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15, 
        backgroundColor: '#101026',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24
    },
    input:{
        width: '90%',
        height: 60,
        backgroundColor: '#101035',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 22,
        color: '#fff'
    },
    button:{
        width: '90%',
        height: 40,
        backgroundColor: '#928c56',
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold'
    }
})