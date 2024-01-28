import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Background3, Pria, Unvoice, RedCall, VideoCall } from '../../asset'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export default class CallPage extends Component {
  render() {
    return (
      <ImageBackground source={Background3} style={style.background}>
        <Text style={style.text_descrip}>terhubung</Text>
        <Image source={Pria} style={style.profile}/>
        <Text style={style.username}>Michael Daniel Jefferson</Text>
        <View style={style.navigation}>
          <TouchableOpacity>
            <Image source={RedCall}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Unvoice}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={VideoCall}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        padding: widthPercentageToDP('10%'),
    },
    text_descrip:{
        fontWeight: '500',
        color: 'white',
        fontSize: heightPercentageToDP('2.3%'),
        marginTop: heightPercentageToDP('15%'),
        marginBottom: heightPercentageToDP('5%'),
    },
    profile:{
        width: 100,
        height: 100,
        borderRadius: widthPercentageToDP('15%'),
        marginBottom: heightPercentageToDP('1%'),
    },
    username:{
        fontWeight: '500',
        color: 'white',
        marginBottom: heightPercentageToDP('42%'),
    },
    navigation:{
        height: heightPercentageToDP('7.5%'),
        width: widthPercentageToDP('70%'),
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: widthPercentageToDP('5%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})