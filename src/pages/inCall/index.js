import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Background3 } from '../../asset'
import React, { Component } from 'react'
import { Pria, RedCall, WhiteCall } from '../../asset'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default class InCall extends Component {
  render() {
    return (
      <ImageBackground source={Background3} style={style.background}>
        <View style={style.headerkonten}>
            <Text style={style.textcall}>panggilan</Text>
            <Image source={Pria} style={style.profile}/>
            <Text style={style.username}>Michael Daniel Jefferson</Text>
            <View style={style.wrappinglift}>
                <TouchableOpacity>
                    <Image source={RedCall}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={WhiteCall}/>
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
    },
    headerkonten:{
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('70%'),
    },
    textcall:{
        fontWeight: '500',
        fontSize: heightPercentageToDP('2.3%'),
        marginBottom: heightPercentageToDP('10%'),
    },
    profile:{
        height: 100,
        width: 100,
        borderRadius: widthPercentageToDP('15%'),
        marginBottom: heightPercentageToDP('1%'),
    },
    username:{
        fontWeight: '500',
        marginBottom: heightPercentageToDP('18%'),
        fontSize: heightPercentageToDP('2.3%'),
    },
    wrappinglift:{
        width: '55%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: widthPercentageToDP('-25%'),
        marginBottom: heightPercentageToDP('-15%'),
    },
})