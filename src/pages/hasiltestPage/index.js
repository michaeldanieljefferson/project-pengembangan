// import React, { Component } from 'react';
// import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { Background, Left, Right } from '../../asset';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// export default class HasilTest extends Component {
//   render() {
//     const { route, navigation } = this.props;
//     const {
//       mindTestResult,
//       ExtrovertResult,
//       IntrovertResult,
//       IntuitifResult,
//       SenseResult,
//       ThingResult,
//       FeelingResult,
//       PerceivingResult,
//       JudgingResult,
//     } = route.params;

//     const mindTestPercentage = mindTestResult ? `${mindTestResult}%` : 'N/A';
//     const ExtrovertPercentage = ExtrovertResult ? `${ExtrovertResult}%` : 'N/A';
//     const IntrovertPercentage = IntrovertResult ? `${IntrovertResult}%` : 'N/A';
//     const IntuitifPercentage = IntuitifResult ? `${IntuitifResult}%` : 'N/A';
//     const SensePercentage = SenseResult ? `${SenseResult}%` : 'N/A';
//     const ThingPercentage = ThingResult ? `${ThingResult}%` : 'N/A';
//     const FeelingPercentage = FeelingResult ? `${FeelingResult}%` : 'N/A';
//     const PerceivingPercentage = PerceivingResult ? `${PerceivingResult}%` : 'N/A';
//     const JudgingPercentage = JudgingResult ? `${JudgingResult}%` : 'N/A';

//     return (
//       <ImageBackground source={Background} style={style.background}>
//         <View style={style.container}>
//           <View style={style.header_position}>
//             <View style={style.header_info_page}>
//               <View style={style.background_hal}>
//                 <Text style={style.hal}>hal :</Text>
//               </View>
//               <View style={style.number_page}>
//                 <Text style={style.hal}>3</Text>
//               </View>
//               <Text style={style.many_page}>...</Text>
//               <View style={style.number_page}>
//                 <Text style={style.hal}>5</Text>
//               </View>
//             </View>
//           </View>
//           <View style={style.judul}>
//             <Text style={style.text}>Hasil Test</Text>
//           </View>
//         </View>
//         <View style={style.header_deskription_mind}>
//           <Text style={style.judul_test}>Hasil test 1</Text>
//           <View style={style.wrapping_hasil}>
//             <View>
//               <Text style={style.description}>Kematangan pikiran</Text>
//               <View style={style.line} />
//             </View>
//             <View>
//               <Text style={style.description}> : {mindTestPercentage}</Text>
//               <View style={style.line} />
//             </View>
//           </View>
//           <Text style={style.judul_test}>Hasil test 2</Text>
//           <View style={style.wrapping_hasil}>
//             <View>
//               <Text style={style.description}>Extrovert</Text>
//               <Text style={style.description}>Introvert</Text>
//               <Text style={style.description}>Intuitif</Text>
//               <Text style={style.description}>Sense</Text>
//               <Text style={style.description}>Thing</Text>
//               <Text style={style.description}>Feeling</Text>
//               <Text style={style.description}>Perceiving</Text>
//               <Text style={style.description}>Judging</Text>
//             </View>
//             <View>
//               <Text style={style.description}> : {ExtrovertPercentage}</Text>
//               <Text style={style.description}> : {IntrovertPercentage}</Text>
//               <Text style={style.description}> : {IntuitifPercentage}</Text>
//               <Text style={style.description}> : {SensePercentage}</Text>
//               <Text style={style.description}> : {ThingPercentage}</Text>
//               <Text style={style.description}> : {FeelingPercentage}</Text>
//               <Text style={style.description}> : {PerceivingPercentage}</Text>
//               <Text style={style.description}> : {JudgingPercentage}</Text>
//             </View>
//           </View>
//         </View>
//         <View style={style.wrapping_header_button}>
//           <View style={style.header_button}>
//             <TouchableOpacity style={style.button} onPress={() => navigation.navigate('CaracterTest')}>
//               <Image source={Left} />
//             </TouchableOpacity>
//             <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DaftarPage')}>
//               <Image source={Right} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     );
//   }
// }
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Background } from '../../asset';
import { Left, Right } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default class HasilTest extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={Background} style={style.background}>
        <View style={style.container}>
          <View style={style.header_position}>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
            <View style={style.line_now}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
          </View>
          <View style={style.judul}>
            <Text style={style.text}>Hasil Test</Text>
          </View>
        </View>
        {/* <ScrollView contentContainerStyle={style.header_deskription_mind}> */}
        <View style={style.header_deskription_mind}>
            <Text style={style.judul_test}>Hasil test 1</Text>
            <View style={style.wrapping_hasil}>
                <View><Text style={style.description}>Kematangan pikiran</Text><View style={style.line} /></View>
                <View><Text style={style.description}> : 70%</Text><View style={style.line} /></View>
            </View>
            <Text style={style.judul_test}>Hasil test 2</Text>
            <View style={style.wrapping_hasil}>
                <View>
                    <Text style={style.description}>Extrovert</Text>
                    <Text style={style.description}>Introvert</Text>
                    <View style={style.line} />
                    <Text style={style.description}>Think</Text>
                    <Text style={style.description}>Feeling</Text>
                </View>
                <View>
                    <Text style={style.description}> : 30%</Text>
                    <Text style={style.description}> : 50%</Text>
                    <View style={style.line} />
                    <Text style={style.description}> : 60%</Text>
                    <Text style={style.description}> : 30%</Text>
                </View>
            </View>
        </View>
        {/* </ScrollView> */}
        <View style={style.wrapping_header_button}>
            <View style={style.header_button}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('CaracterTest')}>
                    <Image source={Left} />
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DaftarPage')}>
                    <Image source={Right} />
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      padding: heightPercentageToDP('1.4%'),
    },
    header_position: {
      width: '100%',
      height: heightPercentageToDP('3%'),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: heightPercentageToDP('5%'),
    },
    line_page:{
      width: widthPercentageToDP('15%'),
      borderColor: '#B3B3B3',
      borderWidth: 1.5,
      margin: 5,
      borderRadius: widthPercentageToDP('3%'),
    },
    line_now:{
      width: widthPercentageToDP('15%'),
      borderColor: '#000000',
      borderWidth: 1.5,
      margin: 5,
      borderRadius: widthPercentageToDP('3%'),
    },
    judul: {
      width: '100%',
      alignItems: 'center',
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: widthPercentageToDP('5.6%'),
    },
    header_deskription_mind: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapping_hasil: {
      flexDirection: 'row',
      marginBottom: heightPercentageToDP('5%'),
    },
    judul_test: {
      color: 'black',
      fontSize: widthPercentageToDP('5%'),
      fontWeight: 'bold',
    },
    description: {
      color: 'black',
      fontSize: widthPercentageToDP('4%'),
      fontWeight: 'bold',
    },
    line: {
      marginVertical: heightPercentageToDP('1.5%'),
      backgroundColor: 'black',
      height: heightPercentageToDP('0.2%'),
      width: widthPercentageToDP('40%'),
    },
    wrapping_header_button: {
      width: widthPercentageToDP('100%'),
      alignItems: 'center',
      marginBottom: heightPercentageToDP('2%'),
    },
    header_button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: widthPercentageToDP('75%'),
    },
    button: {
      width: widthPercentageToDP('17.8%'),
      height: heightPercentageToDP('6%'),
      backgroundColor: '#9F711C',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: widthPercentageToDP('10%'),
    },
  });