import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { ForgetKey } from '../../asset'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default class LupaPassword extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Image source={ForgetKey}/>
        <Text style={style.LKS}>Lupa Kata Sandi?</Text>
        <Text style={style.deskripsion}>Tidak Masalah! Souly akan membantu kamu untuk dapat mengakses akun kamu kembali</Text>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('InputUserEmail')}>
            <Text style={style.text_button}>Selanjutnya</Text>
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
    LKS:{
        color: 'black',
        fontSize: heightPercentageToDP('3.38%'),
        fontWeight: 'bold',
        marginTop: heightPercentageToDP('5%'),
        marginBottom: heightPercentageToDP('2%'),
    },
    deskripsion:{
        color: 'black',
        width: widthPercentageToDP('90%'),
        textAlign: 'center',
        marginBottom: heightPercentageToDP('12%'),
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
        marginTop: heightPercentageToDP('1.8%'),
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: widthPercentageToDP('0.05%'),
        elevation: heightPercentageToDP('0.08%'), 
        marginBottom: heightPercentageToDP('8%'),
    },
    text_button:{
        color: '#FFBFC4',
        fontSize: heightPercentageToDP('2.5%'),
        fontWeight: 'bold',
    },
})