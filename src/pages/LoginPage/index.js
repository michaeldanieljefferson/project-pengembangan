import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Logo1, Frame } from '../../asset';
import { Input } from '../../komponen';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const LoginPage = ({ navigation }) => {
  return (
    <ImageBackground style={styles.background} source={Frame}>
      <Image style={styles.logo} source={Logo1}/>
      <View style={styles.container}>
        <Text style={styles.masuk}>Masuk</Text>
        <Input style={styles.input} placeholder="Alamat Email" placeholderTextColor="grey"/>
        <Input style={styles.input} placeholder="Kata Sandi" placeholderTextColor="grey" password/>
        <View style={styles.headerpass}>
          <TouchableOpacity style={styles.button_lupa} onPress={() => navigation.navigate('LupaPassword')}>
            <Text style={styles.lupa_pass}>Lupa Kata Sandi?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.continue}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_daftar} onPress={() => navigation.navigate('MindTest')}>
          <Text style={styles.daftar}>pengguna baru?</Text>
          <Text style={{color: 'gray', fontWeight: 'bold'}}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background:{
    alignItems: 'center',
    flex: 1,
  },
  logo:{
    marginTop: heightPercentageToDP('6%'),
    marginBottom: heightPercentageToDP('-1%'),
  },
  container:{
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP('20%'),
  },
  masuk:{
    color: '#FFBFC4',
    fontSize: widthPercentageToDP('5.6%'),
    fontWeight: 'bold',
    marginLeft: widthPercentageToDP('-44%'),
    marginBottom: heightPercentageToDP('2%'),
  },
  input:{
    color: 'black',
  },
  headerpass:{
    width: '70%',
    alignItems: 'flex-end',
    marginTop: heightPercentageToDP('-3.5%'),
  },
  button_lupa:{
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('3%'),
  },
  lupa_pass:{
    color: 'gray',
  },
  button:{
    width: widthPercentageToDP('43.8%'),
    height: heightPercentageToDP('6%'),
    borderRadius: widthPercentageToDP('10%'),
    borderColor: '#FFBFC4',
    borderTopWidth: heightPercentageToDP('0.4%'),
    borderBottomWidth: heightPercentageToDP('0.4%'),
    borderLeftWidth: widthPercentageToDP('1.4%'),
    borderRightWidth: widthPercentageToDP('1.4%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: heightPercentageToDP('7%'),
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: widthPercentageToDP('0.05%'),
    elevation: heightPercentageToDP('0.08%'), 
    marginBottom: heightPercentageToDP('8%'),
  },
  continue:{
    color: '#FFBFC4',
    fontSize: widthPercentageToDP('6%'),
    fontWeight: 'bold',
  },
  button_daftar:{
    flexDirection: 'row',
  },
  daftar:{
    color: 'gray',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;