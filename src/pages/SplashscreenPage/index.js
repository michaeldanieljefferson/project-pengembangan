import { ImageBackground, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Background2, LogoApp } from '../../asset'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Splashscreen({ navigation }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.replace('LoginPage');
        }, 1000);
    
        // Membersihkan timeout saat komponen dibongkar
        return () => clearTimeout(timeout);
      }, [navigation]);
  return (
    <ImageBackground source={Background2} style={style.background}>
      <Image source={LogoApp} style={style.logo}/>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // logo:{
    //     width: widthPercentageToDP('50%'),
    //     height: heightPercentageToDP('20.5%'),
    // },
})