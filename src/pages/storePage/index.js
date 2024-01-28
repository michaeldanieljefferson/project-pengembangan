import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Background, Back, Gold, Wood, Money, Metal } from '../../asset'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export default class StorePage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={Background} style={style.background_container}>
        <View style={style.nav_top}>
            <TouchableOpacity style={style.button_back} onPress={() => this.props.navigation.navigate('HomePage')}>
                <Image source={Back}/>
            </TouchableOpacity>
            <Text style={style.toko}>Toko</Text>
        </View>
        <ScrollView style={style.wrapping_content}>
            <Text style={style.koinUser}>Koin anda</Text>
            <View style={style.boxjumlahkoin}>
                <Image source={Metal}/>
                <Text style={style.sisakoin}>200</Text>
            </View>
            <Text style={style.text_descrption}>Koin</Text>
            <View style={style.content_position}>
                <TouchableOpacity style={style.box}>
                    <View style={style.view_top}>
                        <Image style={style.gold} source={Gold}/>
                        <Image style={style.wood} source={Wood}/>
                        <Text style={style.data}>200</Text>
                    </View>
                    <View style={style.view_down}>
                        <Image source={Money}/>
                        <Text style={style.harga}>Rp. 5.000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.box}>
                    <View style={style.view_top}>
                        <Image style={style.gold} source={Gold}/>
                        <Image style={style.wood} source={Wood}/>
                        <Text style={style.data}>1000</Text>
                    </View>
                    <View style={style.view_down}>
                        <Image source={Money}/>
                        <Text style={style.harga}>Rp. 7.000</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.content_position}>
                <TouchableOpacity style={style.box}>
                    <View style={style.view_top}>
                        <Image style={style.gold} source={Gold}/>
                        <Image style={style.wood} source={Wood}/>
                        <Text style={style.data}>2000</Text>
                    </View>
                    <View style={style.view_down}>
                        <Image source={Money}/>
                        <Text style={style.harga}>Rp. 9.000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.box}>
                    <View style={style.view_top}>
                        <Image style={style.gold} source={Gold}/>
                        <Image style={style.wood} source={Wood}/>
                        <Text style={style.data}>3000</Text>
                    </View>
                    <View style={style.view_down}>
                        <Image source={Money}/>
                        <Text style={style.harga}>Rp. 10.000</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={style.text_descrption}>Asset</Text>
            <View style={style.content_position}>
                <TouchableOpacity style={style.box}></TouchableOpacity>
                <TouchableOpacity style={style.box}></TouchableOpacity>
            </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
    background_container:{
        flex: 1,
    },
    nav_top:{
        flexDirection: 'row',
        alignItems: 'center',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        padding: widthPercentageToDP('5%'),
        marginBottom: heightPercentageToDP('4%'),
    },
    button_back:{
        justifyContent: 'center',
        width: widthPercentageToDP('10%'),
        height: heightPercentageToDP('5%'),
    },
    toko:{
        color: 'black',
        fontSize: widthPercentageToDP('5.6%'),
        fontWeight: '500',
        marginBottom: heightPercentageToDP('-0.5%'),
    },
    wrapping_content:{
        width: '100%',
        height: '100%',
        paddingHorizontal: widthPercentageToDP('3%'),
    },
    text_descrption:{
        color: 'black',
        fontWeight: '500',
        fontSize: heightPercentageToDP('2.5%'),
        marginTop: heightPercentageToDP('2%'),
        marginLeft: widthPercentageToDP('3.5%'),
    },
    koinUser:{
        color: 'black',
        fontWeight: '500',
        fontSize: heightPercentageToDP('2.5%'),
        marginLeft: widthPercentageToDP('3.5%'),
    },
    content_position:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    boxjumlahkoin:{
        height: heightPercentageToDP('5%'),
        width: widthPercentageToDP('43%'),
        borderRadius: widthPercentageToDP('15'),
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    box:{
        width: widthPercentageToDP('45.5%'),
        height: heightPercentageToDP('16%'),
        borderRadius: widthPercentageToDP('5.2%'),
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        margin: widthPercentageToDP('1%'),
    },
    view_top:{
        height: '80%',
        width: '100%',
        borderTopLeftRadius: widthPercentageToDP('5%'),
        borderTopRightRadius: widthPercentageToDP('5%'),
        flexDirection: 'row',
    },
    gold:{
        marginLeft: widthPercentageToDP('9.5%'),
        marginTop: heightPercentageToDP('4%'),
    },
    wood:{
        marginRight: widthPercentageToDP('-11.5%'),
    },
    sisakoin:{
        color: 'white',
        fontWeight: '500',
    },
    data:{
        color: 'white',
        fontWeight: '500',
        marginTop: heightPercentageToDP('3.5%'),
    },
    harga:{
        color: 'white',
        fontWeight: '500',
    },
    view_down:{
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: widthPercentageToDP('5%'),
        borderBottomRightRadius: widthPercentageToDP('5%'),
        paddingLeft: widthPercentageToDP('2.5%'),
    },
})