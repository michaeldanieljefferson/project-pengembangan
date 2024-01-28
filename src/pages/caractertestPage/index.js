import { View, Text, StyleSheet, Image, ImageBackground, 
         ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react'
import { Background } from '../../asset';
import { Check, Left, Right } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default class CaracterTest extends Component {
  constructor(props) {
  super(props);
  this.state = {
    //pertanyaan 1
    isChecked_1: false, isChecked_2: false, isChecked_3: false, isChecked_4: false, isChecked_5: false,
    //pertanyaan 2
    isChecked_6: false, isChecked_7: false, isChecked_8: false, isChecked_9: false, isChecked_10: false,
    //pertanyaan 3
    isChecked_11: false, isChecked_12: false, isChecked_13: false, isChecked_14: false, isChecked_15: false,
    //pertanyaan 4
    isChecked_16: false, isChecked_17: false, isChecked_18: false, isChecked_19: false, isChecked_20: false,
    //pertanyaan 5
    isChecked_21: false, isChecked_22: false, isChecked_23: false, isChecked_24: false, isChecked_25: false,
    //pertanyaan 6
    isChecked_26: false, isChecked_27: false, isChecked_28: false, isChecked_29: false, isChecked_30: false,
    //pertanyaan 7
    isChecked_31: false, isChecked_32: false, isChecked_33: false, isChecked_34: false, isChecked_35: false,
    //pertanyaan 8
    isChecked_36: false, isChecked_37: false, isChecked_38: false, isChecked_39: false, isChecked_40: false,
    //pertanyaan 9
    isChecked_41: false, isChecked_42: false, isChecked_43: false, isChecked_44: false, isChecked_45: false,
    //pertanyaan 10
    isChecked_46: false, isChecked_47: false, isChecked_48: false, isChecked_49: false, isChecked_50: false,
    //pertanyaan 11
    isChecked_51: false, isChecked_52: false, isChecked_53: false, isChecked_54: false, isChecked_55: false,
    //pertanyaan 12
    isChecked_56: false, isChecked_57: false, isChecked_58: false, isChecked_59: false, isChecked_60: false,
    //pertanyaan 13
    isChecked_61: false, isChecked_62: false, isChecked_63: false, isChecked_64: false, isChecked_65: false,
    //pertanyaan 14
    isChecked_66: false, isChecked_67: false, isChecked_68: false, isChecked_69: false, isChecked_70: false,
  };
  }

  toggleCheckbox_1 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_1") ? 5 : 
                    (checkboxNumber === "isChecked_2") ? 4 : 
                    (checkboxNumber === "isChecked_3") ? 3 : 
                    (checkboxNumber === "isChecked_4") ? 2 : 
                    (checkboxNumber === "isChecked_5") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 1; i <= 5; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_2 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_6") ? 5 : 
                    (checkboxNumber === "isChecked_7") ? 4 : 
                    (checkboxNumber === "isChecked_8") ? 3 : 
                    (checkboxNumber === "isChecked_9") ? 2 : 
                    (checkboxNumber === "isChecked_10") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 6; i <= 10; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_3 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_11") ? 5 : 
                    (checkboxNumber === "isChecked_12") ? 4 : 
                    (checkboxNumber === "isChecked_13") ? 3 : 
                    (checkboxNumber === "isChecked_14") ? 2 : 
                    (checkboxNumber === "isChecked_15") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 11; i <= 15; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_4 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_16") ? 5 : 
                    (checkboxNumber === "isChecked_17") ? 4 : 
                    (checkboxNumber === "isChecked_18") ? 3 : 
                    (checkboxNumber === "isChecked_19") ? 2 : 
                    (checkboxNumber === "isChecked_20") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 16; i <= 20; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_5 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_21") ? 5 : 
                    (checkboxNumber === "isChecked_22") ? 4 : 
                    (checkboxNumber === "isChecked_23") ? 3 : 
                    (checkboxNumber === "isChecked_24") ? 2 : 
                    (checkboxNumber === "isChecked_25") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 21; i <= 25; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_6 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_26") ? 5 : 
                    (checkboxNumber === "isChecked_27") ? 4 : 
                    (checkboxNumber === "isChecked_28") ? 3 : 
                    (checkboxNumber === "isChecked_29") ? 2 : 
                    (checkboxNumber === "isChecked_30") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 26; i <= 30; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_7 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_31") ? 5 : 
                    (checkboxNumber === "isChecked_32") ? 4 : 
                    (checkboxNumber === "isChecked_33") ? 3 : 
                    (checkboxNumber === "isChecked_34") ? 2 : 
                    (checkboxNumber === "isChecked_35") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 31; i <= 35; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_8 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_36") ? 5 : 
                    (checkboxNumber === "isChecked_37") ? 4 : 
                    (checkboxNumber === "isChecked_38") ? 3 : 
                    (checkboxNumber === "isChecked_39") ? 2 : 
                    (checkboxNumber === "isChecked_40") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 36; i <= 40; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_9 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_41") ? 5 : 
                    (checkboxNumber === "isChecked_42") ? 4 : 
                    (checkboxNumber === "isChecked_43") ? 3 : 
                    (checkboxNumber === "isChecked_44") ? 2 : 
                    (checkboxNumber === "isChecked_45") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 41; i <= 45; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_10 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_46") ? 5 : 
                    (checkboxNumber === "isChecked_47") ? 4 : 
                    (checkboxNumber === "isChecked_48") ? 3 : 
                    (checkboxNumber === "isChecked_49") ? 2 : 
                    (checkboxNumber === "isChecked_50") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 46; i <= 50; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_11 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_51") ? 5 : 
                    (checkboxNumber === "isChecked_52") ? 4 : 
                    (checkboxNumber === "isChecked_53") ? 3 : 
                    (checkboxNumber === "isChecked_54") ? 2 : 
                    (checkboxNumber === "isChecked_55") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 51; i <= 55; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_12 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_56") ? 5 : 
                    (checkboxNumber === "isChecked_57") ? 4 : 
                    (checkboxNumber === "isChecked_58") ? 3 : 
                    (checkboxNumber === "isChecked_59") ? 2 : 
                    (checkboxNumber === "isChecked_60") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 56; i <= 60; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_13 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_61") ? 5 : 
                    (checkboxNumber === "isChecked_62") ? 4 : 
                    (checkboxNumber === "isChecked_63") ? 3 : 
                    (checkboxNumber === "isChecked_64") ? 2 : 
                    (checkboxNumber === "isChecked_65") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 61; i <= 65; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };

  toggleCheckbox_14 = (checkboxNumber) => {
    this.setState((prevState) => {
      let newState = {};

      // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
      const value = (checkboxNumber === "isChecked_66") ? 5 : 
                    (checkboxNumber === "isChecked_67") ? 4 : 
                    (checkboxNumber === "isChecked_68") ? 3 : 
                    (checkboxNumber === "isChecked_69") ? 2 : 
                    (checkboxNumber === "isChecked_70") ? 1 : 0;

      // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
      newState[checkboxNumber] = value;

      // Atur nilai isChecked yang lain menjadi 0
      for (let i = 66; i <= 70; i++) {
        if (`isChecked_${i}` !== checkboxNumber) {
          newState[`isChecked_${i}`] = 0;
        }
      }

      console.log(newState);
      return newState;
    });
  };


  calculateDimensionTotal = (start, end) => {
  let total = 0;

  for (let i = start; i <= end; i++) {
    const isChecked = this.state[`isChecked_${i}`];
    if (isChecked === 1) {
      total += 1;
    } else if (isChecked === 2) {
      total += 2;
    } else if (isChecked === 3) {
      total += 3;
    } else if (isChecked === 4) {
      total += 4;
    } else if (isChecked === 5) {
      total += 5;
    }
  }

  return total;
  };

  calculateResult = () => {
  const totalScore1 = this.calculateDimensionTotal(1, 10);
  const totalScore2 = this.calculateDimensionTotal(11, 20);
  const totalScore3 = this.calculateDimensionTotal(21, 45);
  const totalScore4 = this.calculateDimensionTotal(46, 70);

  console.log('Extrovert :', totalScore1);
  console.log('Introvert :', totalScore2);
  console.log('Intuitif  :', totalScore3);
  console.log('Sense     :', totalScore4);

  const isAllDimensionsAnswered =
    totalScore1 && totalScore2 && totalScore3 && totalScore4;

  if (isAllDimensionsAnswered) {
    this.props.navigation.navigate('HasilTest'); 
  } else {
    Alert.alert(
      'Hii bestieee👋😊 jawab semua pertanyaannya dulu okey 😃👍',
      '',
      [
        {
          text: 'OK',
        },
      ],
      { cancelable: false }
    );
  }

  return isAllDimensionsAnswered;
  };

  // calculateResult = async () => {
  //   const totalScore1 = this.calculateDimensionTotal(1, 25);
  //   const totalScore2 = this.calculateDimensionTotal(26, 50);
  //   const totalScore3 = this.calculateDimensionTotal(52, 75);
  //   const totalScore4 = this.calculateDimensionTotal(76, 100);
  //   const totalScore5 = this.calculateDimensionTotal(101, 125);
  //   const totalScore6 = this.calculateDimensionTotal(126, 150);
  //   const totalScore7 = this.calculateDimensionTotal(151, 175);
  //   const totalScore8 = this.calculateDimensionTotal(176, 200);

  //   console.log('Extrovert :', totalScore1);
  //   console.log('Introvert :', totalScore2);
  //   console.log('Intuitif  :', totalScore3);
  //   console.log('Sense     :', totalScore4);
  //   console.log('Thing     :', totalScore5);
  //   console.log('Feeling   :', totalScore6);
  //   console.log('Perceiving:', totalScore7);
  //   console.log('Judging   :', totalScore8);

  //   const isAllDimensionsAnswered =
  //     totalScore1 && totalScore2 && totalScore3 && totalScore4 && totalScore5 && totalScore6 && totalScore7 && totalScore8;

  //   if (isAllDimensionsAnswered) {
  //     try {
  //       const apiUrl = 'https://your-api-endpoint.com/submit-results'; // Replace with your actual API endpoint
  //       const response = await fetch(apiUrl, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           Extrovert: totalScore1,
  //           Introvert: totalScore2,
  //           Intuitif: totalScore3,
  //           Sense: totalScore4,
  //           Thing: totalScore5,
  //           Feeling: totalScore6,
  //           Perceiving: totalScore7,
  //           Judging: totalScore8,
  //         }),
  //       });

  //       if (response.ok) {
  //         console.log('Results sent to the server successfully!');
  //         // You can navigate to the next screen or perform other actions if needed
  //         // Example: this.props.navigation.navigate('NextScreen');
  //       } else {
  //         console.error('Failed to send results to the server');
  //       }
  //     } catch (error) {
  //       console.error('Error while sending results:', error);
  //     }
  //   } else {
  //     Alert.alert(
  //       'Hii bestieee👋😊 jawab semua pertanyaanya dulu okey 😃👍',
  //       '',
  //       [
  //         {
  //           text: 'OK',
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   }

  //   return isAllDimensionsAnswered;
  // };


  render() {
  const { navigation } = this.props;
  const { isChecked_1, isChecked_2, isChecked_3, isChecked_4, isChecked_5,
      isChecked_6, isChecked_7, isChecked_8, isChecked_9, isChecked_10,
      isChecked_11, isChecked_12, isChecked_13, isChecked_14, isChecked_15,
      isChecked_16, isChecked_17, isChecked_18, isChecked_19, isChecked_20,
      isChecked_21, isChecked_22, isChecked_23, isChecked_24, isChecked_25,
      isChecked_26, isChecked_27, isChecked_28, isChecked_29, isChecked_30,
      isChecked_31, isChecked_32, isChecked_33, isChecked_34, isChecked_35,
      isChecked_36, isChecked_37, isChecked_38, isChecked_39, isChecked_40,
      isChecked_41, isChecked_42, isChecked_43, isChecked_44, isChecked_45,
      isChecked_46, isChecked_47, isChecked_48, isChecked_49, isChecked_50,
      isChecked_51, isChecked_52, isChecked_53, isChecked_54, isChecked_55,
      isChecked_56, isChecked_57, isChecked_58, isChecked_59, isChecked_60,
      isChecked_61, isChecked_62, isChecked_63, isChecked_64, isChecked_65,
      isChecked_66, isChecked_67, isChecked_68, isChecked_69, isChecked_70, } = this.state;
  return (
      <ImageBackground style={style.background_container} source={Background}>
        <View style={style.container}>
          <View style={style.header_position}>
            <View style={style.line_page}/>
            <View style={style.line_now}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
          </View>
          <View style={style.judul}>
            <Text style={style.mind}>Test Kepribadian</Text>
          </View>
          <ScrollView style={style.scrollview}>
            <View style={style.content}>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>1.Extrovert</Text>
                    <Text style={style.pertanyaan}>
                        Saya merasa senang dan bersemangat setelah 
                        menghadiri acara sosial besar.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_1')}>
                            <View>{isChecked_1 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_2')}>
                            <View>{isChecked_2 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_3')}>
                            <View>{isChecked_3 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_4')}>
                            <View>{isChecked_4 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_5')}>
                            <View>{isChecked_5 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>2.Extrovert</Text>
                    <Text style={style.pertanyaan}>
                        Seringkali saya mencari kesempatan untuk berbicara 
                        dengan banyak orang berbeda dalam satu pertemuan.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_6')}>
                            <View>{isChecked_6 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_7')}>
                            <View>{isChecked_7 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_8')}>
                            <View>{isChecked_8 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_9')}>
                            <View>{isChecked_9 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_10')}>
                            <View>{isChecked_10 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>3.Introvert</Text>
                    <Text style={style.pertanyaan}>
                        Saya merasa lebih energik dan fokus ketika diberi 
                        waktu untuk merenung dan bekerja sendiri daripada 
                        berada dalam kerumunan orang.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_11')}>
                            <View>{isChecked_11 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_12')}>
                            <View>{isChecked_12 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_13')}>
                            <View>{isChecked_13 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_14')}>
                            <View>{isChecked_14 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_15')}>
                            <View>{isChecked_15 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>4.Introvert</Text>
                    <Text style={style.pertanyaan}>
                        Ketika saya dihadapkan pada masalah, saya lebih suka 
                        memikirkannya sendiri sebelum berdiskusi dengan orang lain.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_16')}>
                            <View>{isChecked_16 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_17')}>
                            <View>{isChecked_17 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_18')}>
                            <View>{isChecked_18 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_19')}>
                            <View>{isChecked_19 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_20')}>
                            <View>{isChecked_20 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>5.Thinking</Text>
                    <Text style={style.pertanyaan}>
                        Saya lebih mempercayai intuisi dan perasaan saya dalam 
                        membuat keputusan yang penting dalam hidup.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_21')}>
                            <View>{isChecked_21 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_22')}>
                            <View>{isChecked_22 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_23')}>
                            <View>{isChecked_23 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_24')}>
                            <View>{isChecked_24 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_25')}>
                            <View>{isChecked_25 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>6.Thinking</Text>
                    <Text style={style.pertanyaan}>
                        Saya lebih suka mengikuti intuisi dan perasaan saya 
                        dalam menyusun rencana atau strategi untuk mencapai 
                        tujuan.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_6('isChecked_26')}>
                            <View>{isChecked_26 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_6('isChecked_27')}>
                            <View>{isChecked_27 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_6('isChecked_28')}>
                            <View>{isChecked_28 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_6('isChecked_29')}>
                            <View>{isChecked_29 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_6('isChecked_30')}>
                            <View>{isChecked_30 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>7.Thinking</Text>
                    <Text style={style.pertanyaan}>
                        Saya lebih suka memberikan dukungan emosional daripada 
                        solusi praktis dalam situasi yang memerlukan pengambilan 
                        keputusan cepat.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_7('isChecked_31')}>
                            <View>{isChecked_31 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_7('isChecked_32')}>
                            <View>{isChecked_32 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_7('isChecked_33')}>
                            <View>{isChecked_33 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_7('isChecked_34')}>
                            <View>{isChecked_34 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_7('isChecked_35')}>
                            <View>{isChecked_35 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>8.Thinking</Text>
                    <Text style={style.pertanyaan}>
                        Dalam situasi yang memerlukan pengambilan keputusan cepat, 
                        saya lebih suka mendengarkan hati nurani dan perasaan.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_8('isChecked_36')}>
                            <View>{isChecked_36 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_8('isChecked_37')}>
                            <View>{isChecked_37 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_8('isChecked_38')}>
                            <View>{isChecked_38 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_8('isChecked_39')}>
                            <View>{isChecked_39 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_8('isChecked_40')}>
                            <View>{isChecked_40 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>9.Thinking</Text>
                    <Text style={style.pertanyaan}>
                        Saya lebih suka mempertimbangkan perasaan saya, tetapi 
                        rencana saya didasarkan pada logika dalam menyusun rencana 
                        atau strategi.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_9('isChecked_41')}>
                            <View>{isChecked_41 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_9('isChecked_42')}>
                            <View>{isChecked_42 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_9('isChecked_43')}>
                            <View>{isChecked_43 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_9('isChecked_44')}>
                            <View>{isChecked_44 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_9('isChecked_45')}>
                            <View>{isChecked_45 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>10.Feeling</Text>
                    <Text style={style.pertanyaan}>
                        Saat seseorang mengungkapkan perasaan yang mendalam, 
                        saya lebih suka menghadapi masalah dengan fakta dan data.
                    </Text>
                    <Text style={style.pertanyaan}></Text>
                    <Text style={style.pertanyaan}></Text>
                    <Text style={style.pertanyaan}></Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_10('isChecked_46')}>
                            <View>{isChecked_46 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_10('isChecked_47')}>
                            <View>{isChecked_47 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_10('isChecked_48')}>
                            <View>{isChecked_48 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_10('isChecked_49')}>
                            <View>{isChecked_49 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_10('isChecked_50')}>
                            <View>{isChecked_50 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>11.Feeling</Text>
                    <Text style={style.pertanyaan}>
                        Ketika teman atau rekan kerja sedang kesulitan, 
                        saya lebih suka menawarkan solusi dan saran praktis.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_11('isChecked_51')}>
                            <View>{isChecked_51 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_11('isChecked_52')}>
                            <View>{isChecked_52 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_11('isChecked_53')}>
                            <View>{isChecked_53 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_11('isChecked_54')}>
                            <View>{isChecked_54 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_11('isChecked_55')}>
                            <View>{isChecked_55 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>12.Feeling</Text>
                    <Text style={style.pertanyaan}>
                        Saya lebih suka fokus pada fakta dan data daripada 
                        perasaan dalam menghadapi konflik dalam hubungan 
                        pribadi atau profesional.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_12('isChecked_56')}>
                            <View>{isChecked_56 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_12('isChecked_57')}>
                            <View>{isChecked_57 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_12('isChecked_58')}>
                            <View>{isChecked_58 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_12('isChecked_59')}>
                            <View>{isChecked_59 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_12('isChecked_60')}>
                            <View>{isChecked_60 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>13.Feeling</Text>
                    <Text style={style.pertanyaan}>
                        Saat seseorang mengungkapkan perasaan yang mendalam, 
                        saya lebih cenderung mempertimbangkan perasaan daripada fakta.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_13('isChecked_61')}>
                            <View>{isChecked_61 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_13('isChecked_62')}>
                            <View>{isChecked_62 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_13('isChecked_63')}>
                            <View>{isChecked_63 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_13('isChecked_64')}>
                            <View>{isChecked_64 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_13('isChecked_65')}>
                            <View>{isChecked_65 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>14.Feeling</Text>
                    <Text style={style.pertanyaan}>
                        Saya lebih cenderung mempertimbangkan perasaan daripada 
                        fakta dalam merespon konflik dalam hubungan pribadi atau 
                        profesional.
                    </Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_14('isChecked_66')}>
                            <View>{isChecked_66 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_14('isChecked_67')}>
                            <View>{isChecked_67 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_14('isChecked_68')}>
                            <View>{isChecked_68 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_14('isChecked_69')}>
                            <View>{isChecked_69 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_14('isChecked_70')}>
                            <View>{isChecked_70 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.header_button}>
                    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('MindTest')}>
                        <Image source={Left} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={this.calculateResult}>
                        <Image source={Right} />
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
  background_container: {
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
  mind: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('5.6%'),
  },
  scrollview: {
    height: '100%',
    width: '100%',
    marginTop: heightPercentageToDP('2.8%'),
  },
  content: {
    alignItems: 'center',
    marginBottom: heightPercentageToDP('17.6%'),
  },
  wrapping: {
    marginBottom: heightPercentageToDP('5.6%'),
    width: '100%',
    alignItems: 'center',
  },
  pertanyaan: {
    color: 'black',
    fontSize: widthPercentageToDP('5.7%'),
    textAlign: 'center',
  },
  container_box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: heightPercentageToDP('1.7%'),
  },
  box: {
    width: widthPercentageToDP('8.3%'),
    height: heightPercentageToDP('4.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  header_deal: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  setuju: {
    color: 'black',
    fontSize: widthPercentageToDP('5.6%'),
  },
  tidak: {
    color: 'black',
    fontSize: widthPercentageToDP('5.6%'),
  },
  header_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
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