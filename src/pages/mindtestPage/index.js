import { View, Text, StyleSheet, Image, ImageBackground, 
         ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react'
import { Background } from '../../asset';
import { Check, Right, Left } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default class MindTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //pertanyaan 1
          isChecked_1: false, //bobot poin = 1 * 1
          isChecked_2: false, //bobot poin = 1 * 2
          isChecked_3: false, //bobot poin = 1 * 3
          //pertanyaan 2
          isChecked_4: false, //bobot poin = 1 * 1
          isChecked_5: false, //bobot poin = 1 * 2
          isChecked_6: false, //bobot poin = 1 * 3
          //pertanyaan 3 
          isChecked_7: false, //bobot poin = 1 * 1
          isChecked_8: false, //bobot poin = 1 * 2
          isChecked_9: false, //bobot poin = 1 * 3
          //pertanyaan 4
          isChecked_10: false, //bobot poin = 1 * 1
          isChecked_11: false, //bobot poin = 1 * 2
          isChecked_12: false, //bobot poin = 1 * 3
          //pertanyaan 5
          isChecked_13: false, //bobot poin = 1 * 1
          isChecked_14: false, //bobot poin = 1 * 2
          isChecked_15: false, //bobot poin = 1 * 3
          //pertanyaan 6
          isChecked_16: false, //bobot poin = 1 * 1
          isChecked_17: false, //bobot poin = 1 * 2
          isChecked_18: false, //bobot poin = 1 * 3
          //pertanyaan 7
          isChecked_19: false, //bobot poin = 1 * 1
          isChecked_20: false, //bobot poin = 1 * 2
          isChecked_21: false, //bobot poin = 1 * 3
          //pertanyaan 8
          isChecked_22: false, //bobot poin = 1 * 1
          isChecked_23: false, //bobot poin = 1 * 2
          isChecked_24: false, //bobot poin = 1 * 3
          //pertanyaan 9
          isChecked_25: false, //bobot poin = 1 * 1
          isChecked_26: false, //bobot poin = 1 * 2
          isChecked_27: false, //bobot poin = 1 * 3
          //pertanyaan 10
          isChecked_28: false, //bobot poin = 1 * 1
          isChecked_29: false, //bobot poin = 1 * 2
          isChecked_30: false, //bobot poin = 1 * 3
        };
      }
    
    //   toggleCheckbox_1 = (checkboxNumber) => { 
    //     this.setState((prevState) => {
    //       let newState = {};
       
    //       for (let i = 1; i <= 3; i++) {
    //         newState[`isChecked_${i}`] = checkboxNumber === `isChecked_${i}` ? i : 0;
    //       }
      
    //       console.log(newState);
    //       return newState;
    //     });
    //   };

    toggleCheckbox_1 = (checkboxNumber) => {
        this.setState((prevState) => {
          let newState = {};
      
          // Hitung nilai yang akan diberikan berdasarkan checkboxNumber
          const value = (checkboxNumber === "isChecked_1") ? 1 : (checkboxNumber === "isChecked_2") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 1; i <= 3; i++) {
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
          const value = (checkboxNumber === "isChecked_4") ? 1 : (checkboxNumber === "isChecked_5") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 4; i <= 6; i++) {
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
          const value = (checkboxNumber === "isChecked_7") ? 1 : (checkboxNumber === "isChecked_8") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 7; i <= 9; i++) {
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
          const value = (checkboxNumber === "isChecked_10") ? 1 : (checkboxNumber === "isChecked_11") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 10; i <= 12; i++) {
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
          const value = (checkboxNumber === "isChecked_13") ? 1 : (checkboxNumber === "isChecked_14") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 13; i <= 15; i++) {
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
          const value = (checkboxNumber === "isChecked_16") ? 1 : (checkboxNumber === "isChecked_17") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 16; i <= 18; i++) {
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
          const value = (checkboxNumber === "isChecked_19") ? 1 : (checkboxNumber === "isChecked_20") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 19; i <= 21; i++) {
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
          const value = (checkboxNumber === "isChecked_22") ? 1 : (checkboxNumber === "isChecked_23") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 22; i <= 24; i++) {
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
          const value = (checkboxNumber === "isChecked_25") ? 1 : (checkboxNumber === "isChecked_26") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 25; i <= 27; i++) {
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
          const value = (checkboxNumber === "isChecked_28") ? 1 : (checkboxNumber === "isChecked_29") ? 2 : 3;
      
          // Atur nilai isChecked yang dipilih menjadi nilai yang sesuai
          newState[checkboxNumber] = value;
      
          // Atur nilai isChecked yang lain menjadi 0
          for (let i = 28; i <= 30; i++) {
            if (`isChecked_${i}` !== checkboxNumber) {
              newState[`isChecked_${i}`] = 0;
            }
          }
      
          console.log(newState);
          return newState;
        });
      };


      // calculateResult = async () => {
      //   let totalScore1 = 0;
      //   let totalScore2 = 0;
      //   let totalScore3 = 0;
      
      //   // Hitung total skor untuk setiap kategori
      //   for (let i = 1; i <= 60; i++) {
      //     const isChecked = this.state[`isChecked_${i}`];
      //     if (isChecked === 1) {
      //       totalScore1 += 1;
      //     } else if (isChecked === 2) {
      //       totalScore2 += 2;
      //     } else if (isChecked === 3) {
      //       totalScore3 += 3;
      //     }
      //   }
      
      //   const totalResult = totalScore1 + totalScore2 + totalScore3;
      //   const dividedResult = totalResult / 60;
      //   const finalResult = Math.min(dividedResult * 100, 100);
      
      //   console.log('Total Score 1:', totalScore1);
      //   console.log('Total Score 2:', totalScore2);
      //   console.log('Total Score 3:', totalScore3);
      //   console.log('Final Result:', finalResult);
      
      //   if (finalResult <= 30) {
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
      //   } else {
      //     // If finalResult is greater than 30, send it to the server
      //     try {
      //       const apiUrl = 'https://your-api-endpoint.com/submit-result'; // Replace with your actual API endpoint
      //       const response = await fetch(apiUrl, {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify({ mindTestResult: finalResult }),
      //       });
      
      //       if (response.ok) {
      //         console.log('Result sent to the server successfully!');
      //         // If you want to navigate to the next screen after sending the result, you can do it here
      //         this.props.navigation.navigate('HasilTest', { mindTestResult: finalResult });
      //       } else {
      //         console.error('Failed to send result to the server');
      //       }
      //     } catch (error) {
      //       console.error('Error while sending result:', error);
      //     }
      //   }
      
      //   return finalResult;
      // };
      
 

      calculateResult = () => {
          let totalScore1 = 0;
          let totalScore2 = 0;
          let totalScore3 = 0;

          // Hitung total skor untuk setiap kategori
          for (let i = 1; i <= 30; i++) {
              const isChecked = this.state[`isChecked_${i}`];
              if (isChecked === 1) {
                  totalScore1 += 1;
              } else if (isChecked === 2) {
                  totalScore2 += 2;
              } else if (isChecked === 3) {
                  totalScore3 += 3;
              }
          }
          const totalResult = totalScore1 + totalScore2 + totalScore3;
          const dividedResult = totalResult * 10;
          const finalResult = Math.min(dividedResult / 3, 100);

          console.log('Total Score 1:', totalScore1);
          console.log('Total Score 2:', totalScore2);
          console.log('Total Score 3:', totalScore3);
          console.log('Final Result:', finalResult);

          if (finalResult <= 30) {
            Alert.alert(
                'Hii bestieee👋😊 jawab semua pertanyaanya dulu okey 😃👍',
                '',
                [
                    {
                        text: 'OK',
                    },
                ],
                { cancelable: false }
            );
        } else {
            // If finalResult is greater than 30, navigate to CaracterTest
            this.props.navigation.navigate('CaracterTest'); // Replace with the actual screen name
        }
        

          return finalResult;
      };
      
      // checkAllCheckboxesFilled = () => {
      //   for (let i = 1; i <= 60; i++) {
      //     if (this.state[`isChecked_${i}`] === 0) {
      //       return false;
      //     }
      //   }
      //   return true;
      // };

     
      // handleNextButton = () => {
      //   const allCheckboxSelected = checkAllCheckboxesFilled();
      //   if (allCheckboxSelected) {
      //     this.props.navigation.navigate('CaracterTest');
      //   } else {
      //     alert('Harap pilih semua checkbox sebelum melanjutkan.');
      //   }
      // };
      checkAllToggleCheckboxesFilled = () => {
        for (let i = 1; i <= 60; i++) {
          let checkboxFilled = false;
      
          // Check if at least one option is selected for the current toggleCheckbox
          for (let j = 1; j <= 3; j++) {
            if (this.state[`isChecked_${i}_${j}`]) {
              checkboxFilled = true;
              break;
            }
          }
      
          // If no option is selected for the current toggleCheckbox, return false
          if (!checkboxFilled) {
            return false;
          }
        }
      
        // If we reach here, at least one option is selected for each toggleCheckbox
        return true;
      };
      
      // Fungsi untuk menangani tombol selanjutnya
      handleNextButton = () => {
        const allToggleCheckboxesSelected = this.calculateResult();
      
        if (allToggleCheckboxesSelected) {
          this.props.navigation.navigate('CaracterTest');
        } else {
          if (allToggleCheckboxesSelected === 0) {
            Alert.alert(
              'Peringatan',
              'Data harus diisi. Harap pilih setidaknya satu opsi di setiap kategori toggleCheckbox sebelum melanjutkan.'
            );
          } else {
            Alert.alert(
              'Peringatan',
              'Harap pilih setidaknya satu opsi di setiap kategori toggleCheckbox sebelum melanjutkan.'
            );
          }
        }
      };
      
      handleButtonPress = () => {
          const result = this.calculateSoal_1();
          console.log('Result:', result);
        };
  render() {
    const { navigation } = this.props;
    const { isChecked_1, isChecked_2, isChecked_3,
            isChecked_4, isChecked_5, isChecked_6,
            isChecked_7, isChecked_8, isChecked_9,
            isChecked_10, isChecked_11, isChecked_12,
            isChecked_13, isChecked_14, isChecked_15,
            isChecked_16, isChecked_17, isChecked_18,
            isChecked_19, isChecked_20, isChecked_21,
            isChecked_22, isChecked_23, isChecked_24,
            isChecked_25, isChecked_26, isChecked_27,
            isChecked_28, isChecked_29, isChecked_30,
          } = this.state;
            
    return (
      <ImageBackground style={style.background_container} source={Background}>
        <View style={style.container}>
          <View style={style.header_position}>
            <View style={style.line_now}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
          </View>
          <View style={style.judul}>
            <Text style={style.mind}>Test Pikiran</Text>
          </View>
          <ScrollView style={style.scrollview}>
            <View style={style.content}>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Kalau saya tidak menang, itu pasti</Text>
                    <Text style={style.pertanyaan}>karena orang lain selalu merugikan</Text>
                    <Text style={style.pertanyaan}>saya.</Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_1')}>
                            <View>{isChecked_1 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.box, { marginLeft: 50, marginRight: 50 }]}
                        onPress={() => this.toggleCheckbox_1('isChecked_2')}
                        >
                            <View>{isChecked_2 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_1('isChecked_3')}>
                            <View>{isChecked_3 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Hidup ini tidak adil, saya tidak tahu</Text>
                    <Text style={style.pertanyaan}>kenapa saya harus berusaha.</Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_4')}>
                            <View>{isChecked_4 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.box, { marginLeft: 50, marginRight: 50 }]}
                        onPress={() => this.toggleCheckbox_2('isChecked_5')}
                        >
                            <View>{isChecked_5 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_2('isChecked_6')}>
                            <View>{isChecked_6 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Jika seseorang tidak setuju</Text>
                    <Text style={style.pertanyaan}>dengan saya, berarti mereka</Text>
                    <Text style={style.pertanyaan}>salah atau bodoh</Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_7')}>
                            <View>{isChecked_7 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.box, { marginLeft: 50, marginRight: 50 }]}
                        onPress={() => this.toggleCheckbox_3('isChecked_8')}
                        >
                            <View>{isChecked_8 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_3('isChecked_9')}>
                            <View>{isChecked_9 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Saya tidak suka menghadapi</Text>
                    <Text style={style.pertanyaan}>konsekuensi, saya lebih suka</Text>
                    <Text style={style.pertanyaan}>menghindarinya.</Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_10')}>
                            <View>{isChecked_10 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.box, { marginLeft: 50, marginRight: 50 }]}
                        onPress={() => this.toggleCheckbox_4('isChecked_11')}
                        >
                            <View>{isChecked_11 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_4('isChecked_12')}>
                            <View>{isChecked_12 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Masa depan itu terlalu jauh, saya</Text>
                    <Text style={style.pertanyaan}>tidak perlu memikirkan itu sekarang.</Text>
                    <View style={style.container_box}>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_13')}>
                            <View>{isChecked_13 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.box, { marginLeft: 50, marginRight: 50 }]}
                        onPress={() => this.toggleCheckbox_5('isChecked_14')}
                        >
                            <View>{isChecked_14 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.box} onPress={() => this.toggleCheckbox_5('isChecked_15')}>
                            <View>{isChecked_15 ? <Image source={Check} /> : <Image />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.header_deal}>
                        <Text style={style.setuju}>setuju</Text>
                        <Text style={style.tidak}>tidak</Text>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Bagaimana Anda mengatasi ketidak</Text>
                    <Text style={style.pertanyaan}>pastian dalam hidup?</Text>
                    <View style={style.container_box2}>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_6('isChecked_16')}>
                                <View>{isChecked_16 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Menyerah pada keadaan</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity
                            style={[style.box2, { marginTop: 20, marginBottom: 20 }]}
                            onPress={() => this.toggleCheckbox_6('isChecked_17')}
                            >
                                <View>{isChecked_17 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Berusaha mencari solusi yang dapat diendalikan</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_6('isChecked_18')}>
                                <View>{isChecked_18 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Melihat ketidakpastian sebagai peluang untuk tumbuh</Text>
                        </View>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Apa yang menurut Anda merupakan</Text>
                    <Text style={style.pertanyaan}>tanda keberhasilan pribadi?</Text>
                    <View style={style.container_box2}>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_7('isChecked_19')}>
                                <View>{isChecked_19 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Kepemilikan materi atau status sosial</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity
                            style={[style.box2, { marginTop: 20, marginBottom: 20 }]}
                            onPress={() => this.toggleCheckbox_7('isChecked_20')}
                            >
                                <View>{isChecked_20 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Pencapaian pribadi dan kebahagiaan</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_7('isChecked_21')}>
                                <View>{isChecked_21 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Kontribusi positif pada orang lain dan dunia</Text>
                        </View>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Bagaimana pandangan Anda</Text>
                    <Text style={style.pertanyaan}>terhadap kegagalan dalam mencapai</Text>
                    <Text style={style.pertanyaan}>tujuan?</Text>
                    <View style={style.container_box2}>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_8('isChecked_22')}>
                                <View>{isChecked_22 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Menganggapnya sebagai kegagalan diri</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity
                            style={[style.box2, { marginTop: 20, marginBottom: 20 }]}
                            onPress={() => this.toggleCheckbox_8('isChecked_23')}
                            >
                                <View>{isChecked_23 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Menarik pelajaran dan mencoba lagi</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_8('isChecked_24')}>
                                <View>{isChecked_24 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Melihatnya sebagai kesempatan untuk pertumbuhan pribadi</Text>
                        </View>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Apa yang menurut Anda merupakan</Text>
                    <Text style={style.pertanyaan}>indikator hubungan yang sehat?</Text>
                    <View style={style.container_box2}>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_9('isChecked_25')}>
                                <View>{isChecked_25 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Kebebasan dan kesenangan</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity
                            style={[style.box2, { marginTop: 20, marginBottom: 20 }]}
                            onPress={() => this.toggleCheckbox_9('isChecked_26')}
                            >
                                <View>{isChecked_26 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Komunikasi dan keterbukaan</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_9('isChecked_27')}>
                                <View>{isChecked_27 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Komitmen dan pertumbuhan bersama </Text>
                        </View>
                    </View>
                </View>
                <View style={style.wrapping}>
                    <Text style={style.pertanyaan}>Bagaimana Anda menanggapi konflik</Text>
                    <Text style={style.pertanyaan}>interpersonal?</Text>
                    <View style={style.container_box2}>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_10('isChecked_28')}>
                                <View>{isChecked_28 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Menghindari atau bersikap defensif</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity
                            style={[style.box2, { marginTop: 20, marginBottom: 20 }]}
                            onPress={() => this.toggleCheckbox_10('isChecked_29')}
                            >
                                <View>{isChecked_29 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Berusaha mencari solusi dan berkomunikasi</Text>
                        </View>
                        <View style={style.pilihan}>
                            <TouchableOpacity style={style.box2} onPress={() => this.toggleCheckbox_10('isChecked_30')}>
                                <View>{isChecked_30 ? <Image source={Check} /> : <Image />}</View>
                            </TouchableOpacity>
                            <Text style={style.content_pilihan}>Mencari pemahaman dan membangun hubungan lebih dalam</Text>
                        </View>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={this.calculateResult}>
                    <Text>Hitung Hasil</Text>
                </TouchableOpacity> */}
                {/* <Text>Hasil: {this.state.finalResult}</Text> */}
                <View style={style.header_button}>
                    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('LoginPage')}>
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
    marginBottom: heightPercentageToDP('17%'),
  },
  wrapping: {
    marginBottom: heightPercentageToDP('5.6%'),
    width: '100%',
    alignItems: 'center',
  },
  pertanyaan: {
    color: 'black',
    fontSize: widthPercentageToDP('5.6%'),
  },
  container_box: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('1.7%'),
  },
  box: {
    width: widthPercentageToDP('8.3%'),
    height: heightPercentageToDP('4.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentageToDP('1.6%'),
    backgroundColor: 'white',
  },
  container_box2: {
    flexDirection: 'column',
    marginTop: heightPercentageToDP('1.7%'),
    padding: heightPercentageToDP('1.6%'),
    width: '100%',
  },
  pilihan: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  content_pilihan: {
    color: 'black',
    fontSize: widthPercentageToDP('5.6%'),
  },
  box2: {
    width: widthPercentageToDP('8.3%'),
    height: heightPercentageToDP('4.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentageToDP('1.6%'),
    backgroundColor: 'white',
    marginRight: widthPercentageToDP('2.8%'),
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
  alert: {
    backgroundColor: '#FFC0CB',
  },
});