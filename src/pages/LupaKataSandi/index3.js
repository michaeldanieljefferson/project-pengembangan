import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Happy } from '../../asset'

export default class SetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newPassword: '',
          confirmPassword: '',
        };
      }
    
      handleNewPasswordChange = (text) => {
        this.setState({ newPassword: text });
      }
    
      handleConfirmPasswordChange = (text) => {
        this.setState({ confirmPassword: text });
      }
    
      handleVerifyAccount = () => {
    
        if (this.state.newPassword === this.state.confirmPassword) {
          this.props.navigation.navigate('LoginPage');
        } else {
          alert('Kata sandi tidak cocok. Silakan coba lagi.');
        }
      }
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.wrapping_content}>
            <Image source={Happy}/>
            <Text style={style.statement}>Atur Ulang Kata Sandi Kamu</Text>
            <Text style={style.description}>Atur ulang kata sandi kamu. Jika sudah kamu dapat langsung di arahkan kehalaman masuk</Text>
            <View style={style.wrapping_input}>
                <TextInput
                    placeholder='Kata Sandi Baru'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                    onChangeText={this.handleNewPasswordChange}
                    value={this.state.newPassword}
                />
            </View>
            <View style={style.wrapping_input}>
                <TextInput
                    placeholder='Ketik Ulang Kata Sandi Baru'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                    onChangeText={this.handleConfirmPasswordChange}
                    value={this.state.confirmPassword}
                />
            </View>
        </View>
        <TouchableOpacity 
            style={style.button}
            title='Verifikasi Akun'
            onPress={this.handleVerifyAccount}
        >
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
    wrapping_content:{
        width: '100%',
        height: heightPercentageToDP('75%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    statement:{
        color: 'black',
        fontSize: heightPercentageToDP('3.38%'),
        fontWeight: 'bold',
        width: widthPercentageToDP('85%'),
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
        marginBottom: heightPercentageToDP('2.5%'),
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
    },
    text_button:{
        color: '#FFBFC4',
        fontSize: heightPercentageToDP('2.5%'),
        fontWeight: 'bold',
    },
})