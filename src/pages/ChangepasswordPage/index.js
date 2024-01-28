import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, 
         StyleSheet, Alert, ImageBackground, Dimensions,
         Image} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Background } from '../../asset';
import { Back } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangePassword = ({ navigation}) => {

  useEffect(() => {
    console.log("DATA YANG DIKIRIM DARI LOGIN SCREEN:\n");
  }, []);

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setOldPass('');
      setNewPass('');
      setConfirmNewPass('');
    }, [])
  );

  const handleChangePassword = () => {
    if (!oldPass.trim() || !newPass.trim() || !confirmNewPass.trim()) {
      Alert.alert(
        'Error Message',
        'Input fields cannot be empty or contain only spaces.'
      );
      return;
    }

    if (newPass !== confirmNewPass) {
      Alert.alert(
        'Error Message',
        'New password and confirm password must match.'
      );
      return;
    }

    const requestBody = {
      'email': email,
      'oldPass': oldPass,
      'newPass': newPass,
    };

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out.'));
      }, 5000);
    });

    Promise.race([
      fetch('https://www.wastegps.online/fullstack/waste_gps/changepassword/changepassword.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: Object.keys(requestBody)
          .map(
            key =>
              `${encodeURIComponent(key)}=${encodeURIComponent(
                requestBody[key]
              )}`
          )
          .join('&'),
      }),
      timeoutPromise,
    ])
      .then(response => response.text())
      .then(textData => {
        console.log(textData);

        if (textData.includes('ERROR')) {
          Alert.alert(
            'Error Message',
            'Sorry, change password failed. Please try again.'
          );
          return;
        }

        if (textData.includes('INCORRECT')) {
          Alert.alert(
            'Error Message',
            'Sorry, you put an incorrect old password. Please try again.'
          );
          return;
        }

        if (textData.includes('SUCCESS')) {
          Alert.alert(
            'Success',
            'Password berhasil diubah. Mohon login dengan password baru anda.'
          );
          navigation.navigate('SignIn');
        }
      })
      .catch(error => {
        Alert.alert('Error Message', error.message);
        return;
      });
  };

  const backToProfile = (email) => {
    email = "" + email;
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground source={Background} style={style.container}>
      <View style={style.top_navigation}>
        <TouchableOpacity style={style.button_back} onPress={() => navigation.navigate('HomePage')}>
          <Image source={Back} style={style.back}/>
        </TouchableOpacity>
        <Text style={style.title}>kata sandi</Text>
      </View>
      <View style={style.content}>
        <TextInput
          style={style.input}
          placeholder="Password Lama"
          placeholderTextColor="#666666"
          value={oldPass}
          onChangeText={setOldPass}
        />
        <TextInput
          style={style.input}
          placeholder="Password Baru"
          placeholderTextColor="#666666"
          value={newPass}
          onChangeText={setNewPass}
        />
        <TextInput
          style={style.input}
          placeholder="Konfirmasi Password Baru"
          placeholderTextColor="#666666"
          value={confirmNewPass}
          onChangeText={setConfirmNewPass}
        />
        <TouchableOpacity style={style.button} onPress={handleChangePassword}>
          <Text style={style.buttonText}>ubah sandi</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('10%'),
    padding: widthPercentageToDP('5%'),
  },
  button_back: {
    justifyContent: 'center',
    width: widthPercentageToDP('10%'),
    height: heightPercentageToDP('5%'),
    marginTop: heightPercentageToDP('0.5%'),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: widthPercentageToDP('5.6%'),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('-0.5%'),
    color: 'black',
  },
  input: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('5%'),
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: heightPercentageToDP('4%'),
    fontSize: widthPercentageToDP('4%'),
    color: 'white',
  },
  button: {
    width: widthPercentageToDP('32%'),
    height: heightPercentageToDP('5%'),
    backgroundColor: '#9F711C',
    marginTop: heightPercentageToDP('5%'),
    borderRadius: widthPercentageToDP('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
  },
});

export default ChangePassword;
