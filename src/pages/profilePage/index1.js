import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Background, Pria, Back } from '../../asset'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export default class FriendProfile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={Background} style={style.background}>
        <View style={style.header_btn}>
            <TouchableOpacity style={style.btn_nav} onPress={() => navigation.navigate('ChatPage')}>
                <Image source={Back}/>
            </TouchableOpacity>
        </View>
        <View style={style.wrapping_profile}>
            <Image source={Pria} style={style.profile}/>
        </View>
        <View style={style.wrapping_data}>
            <View>
                <Text style={style.datadiri}>Nama</Text>
                <Text style={style.datadiri}>Umur</Text>
                <Text style={style.datadiri}>Lahir</Text>
                <Text style={style.datadiri}>Pekerjaan</Text>
                <Text style={style.datadiri}>Hobi</Text>
                <Text style={style.datadiri}>Alamat</Text>
            </View>
            <View style={{marginLeft: widthPercentageToDP('1%')}}>
                <Text style={style.datadiri}>: Michael Daniel Jefferson</Text>
                <View style={style.header_data_umur}>
                    <Text style={style.datadiri}>: 23</Text>
                    <Text style={style.datadiri}> thn</Text>
                </View>
                <Text style={style.datadiri}>: 10/10/2000</Text>
                <Text style={style.datadiri}>: Programmer</Text>
                <Text style={style.datadiri}>: Musik</Text>
                <Text style={style.datadiri}>: Kalimantan Timur</Text>
            </View>
        </View>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
    background:{
        flex: 1,
    },
    header_btn:{
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        padding: widthPercentageToDP('5%'),
        marginBottom: heightPercentageToDP('5%'),
    },
    btn_nav:{
        justifyContent: 'center',
        width: widthPercentageToDP('10%'),
        height: heightPercentageToDP('5%'),
        marginTop: heightPercentageToDP('0.5%'),
    },
    wrapping_profile:{
        width: widthPercentageToDP('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
        // height: heightPercentageToDP('25%'),
    },
    profile:{
        height: 120,
        width: 120,
        borderRadius: widthPercentageToDP('50%'),
    },
    wrapping_data:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: heightPercentageToDP('50%'),
    },
    header_data_umur:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    datadiri:{
        color: 'black',
        fontWeight: '500',
        // fontSize: widthPercentageToDP('4.5%'),
        fontSize: 20,
        marginBottom: heightPercentageToDP('2%'),
    },
})