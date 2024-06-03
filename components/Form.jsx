import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [message, setMessage] = useState("")
    const [form, setForm] = useState("")
   
   const handleSubmit = () => {
const data = {
    name: firstName + lastName,
    message
}

   }
   
    return (
        <ScrollView>
            <TextInput style={styles.input} placeholder='Enter First Name' onChangeText={setFirstName}/>
            <TextInput style={styles.input} placeholder='Enter Last Name' onChangeText={setLastName}/>
            <TextInput style={styles.messageInput} placeholder='Message' onChangeText={setMessage}/>
{/* <Button onPress={handleSubmit}>Submit</Button> */}

<View>
    <Text>{firstName}</Text>
    <Text>{lastName}</Text>
    <Text>{message}</Text>


</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: "gray",
        borderRadius:5,
        paddingHorizontal:15
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: "gray",
        borderRadius: 10,
        paddingHorizontal:15,
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
})

export default Form;