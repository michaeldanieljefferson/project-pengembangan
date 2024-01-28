import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Wanita, Back, WhiteShow, Pria } from '../../asset'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export default function LiveMe({navigation}) {
  return (
    <ImageBackground source={Wanita} style={style.background}>
      <View style={style.navigasiTop}>
        <TouchableOpacity style={style.btn_back} onPress={() => navigation.navigate('LiveShow')}>
            <Image source={Back}/>
        </TouchableOpacity>
      </View>
      <View style={style.headerboxkomen}>
        <View style={style.boxkomen}>
            <ScrollView style={style.scroller}>
                <View>
                    <View style={style.header_viewer}>
                        <Image source={Pria} style={style.profile}/>
                        <Text style={{fontWeight: '500', color: 'white'}}>nama Pengguna lain</Text>
                    </View>
                    <Text style={style.komentarviewer}>isi komentar pengguna lain</Text>
                </View>
            </ScrollView>
            <View style={style.wrappingshow}>
                <Image source={WhiteShow}/>
                <Text>20</Text>
            </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
    background:{
        flex: 1,
    },
    navigasiTop:{
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        padding: widthPercentageToDP('5%'),
    },
    btn_back:{
        justifyContent: 'center',
        width: widthPercentageToDP('10%'),
        height: heightPercentageToDP('5%'),
        marginTop: heightPercentageToDP('0.5%'),
    },
    headerboxkomen:{
        width: widthPercentageToDP('100%'),
        alignItems: 'center',
        marginTop: heightPercentageToDP('65%'),
    },
    boxkomen:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: widthPercentageToDP('95%'),
        height: heightPercentageToDP('23%'),
        borderRadius: widthPercentageToDP('3%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    scroller:{
        width: '100%',
        height: heightPercentageToDP('22.5%'),
        borderRadius: widthPercentageToDP('3%'),
        padding: widthPercentageToDP('1%'),
    },
    wrappingshow:{
        alignItems: 'center',
        marginTop: heightPercentageToDP('-16%'),
        marginRight: widthPercentageToDP('2%'),
    },
    header_viewer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile:{
        height: 30,
        width: 30,
        borderRadius: widthPercentageToDP('10%'),
        marginRight: widthPercentageToDP('2%'),
    },
    komentarviewer:{
        fontWeight: '500',
        color: 'white',
        marginLeft: widthPercentageToDP('10.5%'),
    },
})