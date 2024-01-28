import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Email } from '../../asset'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default class InputUserEmail extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.wrapping}>
            <Image source={Email} style={style.logo}/>
            <Text style={style.statement}>Masukkan Alamat Email Kamu!</Text>
            <Text style={style.description}>Souly akan mengirim kode verifikasi ke alamat email kamu, kamu bisa cek di inbox.</Text>
            <View style={style.wrapping_input}>
                <TextInput 
                    placeholder='Alamat Email'
                    placeholderTextColor='gray'
                    keyboardType='email-address'
                />
            </View>
        </View>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Verification')}>
            <Text style={style.text_button}>Kirim</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapping:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: heightPercentageToDP('60%'),
    },
    logo:{
        marginLeft: widthPercentageToDP('16%'),
    },
    statement:{
        color: 'black',
        fontSize: heightPercentageToDP('3.38%'),
        fontWeight: 'bold',
        width: widthPercentageToDP('73%'),
        marginTop: heightPercentageToDP('5%'),
        marginBottom: heightPercentageToDP('2%'),
    },
    description:{
        color: 'black',
        width: widthPercentageToDP('83%'),
        textAlign: 'center',
        marginBottom: heightPercentageToDP('3%'),
    },
    wrapping_input:{
        borderRadius: widthPercentageToDP('10%'),
        height: heightPercentageToDP('6.3%'),
        width: widthPercentageToDP('70%'),
        backgroundColor: '#EDF7FC',
        paddingLeft: widthPercentageToDP('5%'),
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
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: widthPercentageToDP('0.05%'),
        elevation: heightPercentageToDP('0.08%'), 
        marginTop: heightPercentageToDP('10%'),
    },
    text_button:{
        color: '#FFBFC4',
        fontSize: heightPercentageToDP('2.5%'),
        fontWeight: 'bold',
    },
})