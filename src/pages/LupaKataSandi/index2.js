import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Verifay } from '../../asset'

export default class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
          verificationCode: '',
        };
      }
      
      handleVerificationCodeChange = (text) => {
        this.setState({ verificationCode: text });
      }
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.wrapping}>
            <Image source={Verifay} style={style.logo}/>
            <Text style={style.statement}>Masukkan Code Verifikasi</Text>
            <Text style={style.description}>Masukkan code verifikasi yang sudah souly kirim lewat alamat email kamu</Text>
            <View style={style.wrapping_input}>
                <TextInput
                    placeholder='Kode Verifikasi'
                    placeholderTextColor={'gray'} 
                    onChangeText={this.handleVerificationCodeChange}
                    value={this.state.verificationCode}
                />
            </View>
            <View style={style.wrapping_text}>
                <TouchableOpacity style={style.buttonKU}>
                    <Text style={style.text}>Kirim Ulang</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('SetPassword')}>
                <Text style={style.text_button}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapping:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: heightPercentageToDP('55%'),
    },
    logo:{
        marginLeft: widthPercentageToDP('20%'),
    },
    statement:{
        color: 'black',
        fontSize: heightPercentageToDP('3.38%'),
        fontWeight: 'bold',
        width: widthPercentageToDP('78.5%'),
        marginTop: heightPercentageToDP('5%'),
        marginBottom: heightPercentageToDP('2%'),
    },
    description:{
        color: 'black',
        width: widthPercentageToDP('83%'),
        textAlign: 'center',
        marginBottom: heightPercentageToDP('7%'),
    },
    wrapping_input:{
        borderRadius: widthPercentageToDP('10%'),
        height: heightPercentageToDP('6.3%'),
        width: widthPercentageToDP('70%'),
        backgroundColor: '#EDF7FC',
        paddingLeft: widthPercentageToDP('5%'),
    },
    wrapping_text:{
        width: widthPercentageToDP('70%'),
        height: heightPercentageToDP('5%'),
        alignItems: 'flex-end',
    },
    buttonKU:{
        height: heightPercentageToDP('5%'),
        justifyContent: 'center',
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
        marginBottom: heightPercentageToDP('-5%'),
    },
    text:{
        color: 'gray',
    },
    text_button:{
        color: '#FFBFC4',
        fontSize: heightPercentageToDP('2.5%'),
        fontWeight: 'bold',
    },
})