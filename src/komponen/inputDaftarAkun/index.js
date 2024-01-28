import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Show, Hide, Left, Right } from '../../asset';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InputAkun = ({ navigation }) => {
  const [foto_profile, setGambarMulai] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Profile Image:', foto_profile);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    navigation.navigate('DataDiriPage');
  };
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (field === 'confirmPassword') {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    }
  };

  return (
    <View style={style.container}>
        <TouchableOpacity style={style.foto_profile} onPress={() => openImagePicker('mulai')}>
            <Image
                source={
                foto_profile
                    ? { uri: foto_profile }
                    : require('../../asset/icons/addPhoto.png')
                }
            />
        </TouchableOpacity>
        <View style={[
            style.inputContainer,
            {borderColor: isFocus ? 'blue' : 'orange'},
            ]}>
            <TextInput
                style={style.input}
                placeholder="Name"
                placeholderTextColor={'black'}
                value={name}
                onChangeText={(text) => setName(text)}
            />
        </View>
        <View style={[
            style.inputContainer,
            {borderColor: isFocus ? 'blue' : 'orange'},
            ]}>
            <TextInput
                style={style.input}
                placeholder="Email"
                placeholderTextColor={'black'}
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={[
            style.inputContainer,
            { borderColor: isFocus ? 'blue' : 'orange' },
        ]}>
            <TextInput
            style={style.input}
            placeholder="Password"
            placeholderTextColor={'black'}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
            onPress={() => togglePasswordVisibility('password')}
            style={{ position: 'absolute', right: 10 }}
            >
            <View style={{ color: 'black' }}>
                {isPasswordVisible ? <Image source={Hide} /> : <Image source={Show} />}
            </View>
            </TouchableOpacity>
        </View>

        <View style={[
            style.inputContainer,
            { borderColor: isFocus ? 'blue' : 'orange' },
        ]}>
            <TextInput
            style={style.input}
            placeholder="Confirm Password"
            placeholderTextColor={'black'}
            secureTextEntry={!isConfirmPasswordVisible}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity
            onPress={() => togglePasswordVisibility('confirmPassword')}
            style={{ position: 'absolute', right: 10 }}
            >
            <View style={{ color: 'black' }}>
                {isConfirmPasswordVisible ? <Image source={Hide} /> : <Image source={Show} />}
            </View>
            </TouchableOpacity>
        </View>
        <View style={style.header_button}>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('../../pages/hasiltestPage/HasilTest')}>
                <Image source={Left} />
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={handleSignUp}>
                <Image source={Right} />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto_profile: {
        width: windowWidth * 0.25, // Misalnya, mengatur lebar menjadi 25% dari lebar layar
        height: windowWidth * 0.25, // Menyesuaikan tinggi berdasarkan lebar
        borderRadius: windowWidth * 0.125, // Menyesuaikan border radius berdasarkan lebar
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7F8',
        marginBottom: windowHeight * 0.03, // Menyesuaikan margin berdasarkan tinggi layar
    },
    input: {
        height: windowHeight * 0.05, // Menyesuaikan tinggi berdasarkan tinggi layar
        borderColor: 'gray',
        padding: 8,
        width: windowWidth * 0.8, // Menyesuaikan lebar berdasarkan lebar layar
        color: 'black',
    },
    inputContainer: {
        borderRadius: windowWidth * 0.03, // Menyesuaikan border radius berdasarkan lebar
        height: windowHeight * 0.063, // Menyesuaikan tinggi berdasarkan tinggi layar
        width: windowWidth * 0.7, // Menyesuaikan lebar berdasarkan lebar layar
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: windowHeight * 0.035, // Menyesuaikan margin berdasarkan tinggi layar
    },
    header_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth * 0.75, // Menyesuaikan lebar berdasarkan lebar layar
        marginTop: windowHeight * 0.026, // Menyesuaikan margin berdasarkan tinggi layar
    },
    button: {
        width: windowWidth * 0.178, // Menyesuaikan lebar berdasarkan lebar layar
        height: windowHeight * 0.06, // Menyesuaikan tinggi berdasarkan tinggi layar
        backgroundColor: '#9F711C',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowWidth * 0.03, // Menyesuaikan border radius berdasarkan lebar
    },
});


export default InputAkun;
