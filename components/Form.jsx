import React, {useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Form = () => {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');
  const [password, onChangePassword] = useState('');
  const [form, onChangeForm] = useState('');

  const handleSubmit = () => {
    const data = {
      name: firstName + lastName,
      message,
      phoneNumber,
    };
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardDismissMode="on-drag">
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={onChangeFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={onChangeLastName}
        />
        <TextInput
          style={styles.messageInput}
          placeholder="Message"
          onChangeText={onChangeMessage}
          value={message}
          multiline={true}
          maxLength={50}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          keyboardType={'phone-pad'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
        />
        {/* <Button onPress={handleSubmit}>Submit</Button> */}

        <View>
          <Text>{firstName}</Text>
          <Text>{lastName}</Text>
          <Text>{message}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    backgroundColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
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
});

export default Form;
