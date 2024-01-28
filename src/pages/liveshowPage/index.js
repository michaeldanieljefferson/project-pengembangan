import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, 
         TextInput, Modal, FlatList, BackHandler } from 'react-native'; 
import { Background, Profile, LiveHome, Like, Box, Pria } from '../../asset';
import { WhiteLive, WhiteShow, Down, Emoji, Send } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const LiveShow = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isAddChecked, setAddChecked] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddPress = () => {
    // Add your logic here if needed
    setAddChecked(!isAddChecked);
  };

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
    }
  };

  useEffect(() => {
    const backAction = () => {
      if (isModalVisible) {
        toggleModal();
        return true; // prevent default behavior (exit the app)
      }
      return false; // default behavior (exit the app)
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // cleanup on component unmount

  }, [isModalVisible]);

  return (
    <ImageBackground style={style.background} source={Background}>
      <View style={style.nav_top}>
        <Image style={style.profile} source={Profile} />
        <View style={style.HNadd}>
          <Text>Michael Daniel Jefferson</Text>
          <TouchableOpacity style={style.button_af}>
            <Text style={{ color: '#FFBFC4' }}>tambah teman</Text>
          </TouchableOpacity>
        </View>
        <View style={style.wrapping_icon_top}>
          <View style={style.header_show}>
            <Image source={WhiteShow} />
            <Text>jum</Text>
          </View>
          <TouchableOpacity style={style.header_live} onPress={() => navigation.navigate('LiveMe')}>
            <Image source={WhiteLive} />
            <Text>siaran</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={style.live} source={LiveHome} />
      <View style={style.responsif_koment}>
        <FlatList
          style={style.header_koment}
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Pria} style={{width: 30, height: 30, borderRadius: 15,}}/>
                <Text style={{color: 'white', fontWeight: '500', margin: 7,}}>Michael Daniel Jefferson</Text>
              </View>
              <View style={item.sender === 'user' ? style.userMessage : style.otherMessage}>
                <Text style={style.textmassage}>{item.text}</Text>
              </View>
            </View>
          )}
        />
        <View style={style.nav_down}>
          <TouchableOpacity style={style.button_input} onPress={toggleModal}>
            <Text style={{ color: 'white' }}>tuliskan komentar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button_nav}>
            <Image source={Like}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.button_nav}>
            <Image source={Box}/>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <View style={style.modalContainer}>
            <View style={style.chatContainer}>
              <TouchableOpacity style={style.modalCloseButton} onPress={toggleModal}>
                <Image source={Down}/>
              </TouchableOpacity>
              <View style={style.headerinput}>
                <TouchableOpacity>
                  <Image source={Emoji} />
                </TouchableOpacity>
                <TextInput
                  style={style.modalInput}
                  placeholder='Ketikan sesuatu'
                  placeholderTextColor={"gray"}
                  multiline
                  value={inputText}
                  onChangeText={(text) => setInputText(text)}
                  blurOnSubmit={true}
                />
                <TouchableOpacity style={style.modalSendButton} onPress={sendMessage}>
                  <Image source={Send} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default LiveShow;

const style = StyleSheet.create({
  background:{
      flex: 1,
  },
  nav_top:{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      height: heightPercentageToDP('8.3%'),
      width: widthPercentageToDP('100%'),
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
  },
  profile:{
      height: heightPercentageToDP('8%'),
      width: widthPercentageToDP('15%'),
      borderRadius: widthPercentageToDP('10%'),
  },
  HNadd:{
      marginLeft: widthPercentageToDP('2%'),
      width: widthPercentageToDP('52%'),
  },
  button_af:{
      borderColor: '#FFBFC4',
      borderWidth: 1.5,
      borderRadius: widthPercentageToDP('100%'),
      justifyContent: 'center',
      alignItems: 'center',
      height: heightPercentageToDP('4%'),
      width: widthPercentageToDP('34%'),
  },
  wrapping_icon_top:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: widthPercentageToDP('30%'),
  },
  header_show:{
      alignItems: 'center',
  },
  header_live:{
      alignItems: 'center',
  },
  live:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('60%'),
  },
  responsif_koment:{
      justifyContent: 'center',
      alignItems: 'center',
      width: widthPercentageToDP('100%'),
  },
  nav_down:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: heightPercentageToDP('1.5%'),
  },
  button_input:{
      borderWidth: 1,
      borderColor: '#E2E2E2',
      width: widthPercentageToDP('55%'),
      height: heightPercentageToDP('5.5%'),
      borderRadius: widthPercentageToDP('10%'),
      justifyContent: 'center',
      alignItems: 'center',
  },
  button_nav:{
      height: heightPercentageToDP('5%'),
      width: widthPercentageToDP('16%'),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: widthPercentageToDP('5%'),
  },
  header_koment:{
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: widthPercentageToDP('96%'),
    borderRadius: widthPercentageToDP('5%'),
    padding: widthPercentageToDP('1%'),
    height: heightPercentageToDP('22%'),
    marginTop: heightPercentageToDP('1.5%'),
  },
  userMessage: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
    marginLeft: widthPercentageToDP('8%'),
    marginTop: heightPercentageToDP('-2%'),
  },
  textmassage:{ 
    color: 'white',
    fontWeight: '500',
  },
  otherMessage: {
    backgroundColor: '#f1f1f1',
    padding: 8,
    marginVertical: 4,
    marginRight: '30%',
    borderRadius: 8,
    maxWidth: '70%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chatContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: widthPercentageToDP('100%'),
    alignItems: 'center',
  },
  modalCloseButton: {
    height: heightPercentageToDP('4%'),
    width: widthPercentageToDP('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentageToDP('5%'),
  },
  headerinput: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: widthPercentageToDP('15%'),
    paddingLeft: widthPercentageToDP('2%'),
    width: widthPercentageToDP('90%'),
  },
  modalInput: {
    width: widthPercentageToDP('67%'),
    paddingVertical: heightPercentageToDP('1%'),
    color: 'black',
    maxHeight: 80,
  },
  modalSendButton: {
    borderRadius: widthPercentageToDP('15%'),
    width: widthPercentageToDP('10%'),
    alignItems: 'center',
  },
})

 


// import { View, Button, Image } from 'react-native'
// import React, {useState} from 'react'
// import ImageCropPicker from 'react-native-image-crop-picker';

// export default function LiveShow() {
//   const [image, setImage] = useState(null);

//   const openImagePicker = () => {
//     ImageCropPicker.openPicker({
//       mediaType: 'photo',
//       cropping: true,
//     }).then((response) => {
//       if (!response.cancelled) {
//         setImage(response.path);
//       }
//     });
//   };
//   return (
//     <View>
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       <Button title="Choose Image" onPress={openImagePicker} />
//     </View>
//   )
// }

 

// import React, { useState } from 'react';
// import { Text, View, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Modal } from 'react-native';
// import { Background, Profile, LiveHome, Like, Box } from '../../asset';
// import { WhiteLive, WhiteShow } from '../../asset';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const LiveShow = () => {
//   const [showCommentInput, setShowCommentInput] = useState(false);
//   const [comment, setComment] = useState('');

//   const toggleCommentInput = () => {
//     setShowCommentInput(!showCommentInput);
//   };

//   return (
//     <ImageBackground style={style.background} source={Background}>
//       <View style={style.nav_top}>
//         <Image style={style.profile} source={Profile} />
//         <View style={style.HNadd}>
//           <Text>Michael Daniel Jefferson</Text>
//           <TouchableOpacity style={style.button_af}>
//             <Text style={{ color: '#FFBFC4' }}>tambah teman</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={style.wrapping_icon_top}>
//           <View style={style.header_show}>
//             <Image source={WhiteShow} />
//             <Text>jum</Text>
//           </View>
//           <View style={style.header_live}>
//             <Image source={WhiteLive} />
//             <Text>siaran</Text>
//           </View>
//         </View>
//       </View>
//       <Image style={style.live} source={LiveHome} />
//       <View style={style.responsif_koment}>
//         <View style={style.header_koment}></View>
//         <View style={style.nav_down}>
//           <TouchableOpacity style={style.button_input} onPress={toggleCommentInput}>
//             <Text style={{ color: 'white' }}>tuliskan komentar</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={style.button_nav}>
//             <Image source={Like}/>
//           </TouchableOpacity>
//           <TouchableOpacity style={style.button_nav}>
//             <Image source={Box}/>
//           </TouchableOpacity>
//         </View>
//         <Modal visible={showCommentInput} animationType="slide" transparent={true}>
//           <View style={style.modalContainer}>
//             <View style={style.commentContainer}>
//               <TextInput
//                 style={style.commentInput}
//                 placeholder="Tulis komentar..."
//                 placeholderTextColor={'#F5F7F8'}
//                 onChangeText={(text) => setComment(text)}
//               />
//               <TouchableOpacity style={style.closeButton} onPress={toggleCommentInput}>
//                 <Text style={style.close}>Tutup</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ImageBackground>
//   );
// };

// export default LiveShow;

// const style = StyleSheet.create({
//     background:{
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     nav_top:{
//         backgroundColor: 'rgba(0, 0, 0, 0.3)',
//         height: windowHeight * 0.083,
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 3,
//         // marginTop: windowHeight * -0.005,
//     },
//     profile:{
//         height: windowHeight * 0.080,
//         width: windowWidth * 0.150,
//         borderRadius: windowWidth * 0.1,
//     },
//     HNadd:{
//         marginLeft: windowWidth * 0.020,
//         width: '52%',
//     },
//     button_af:{
//         borderColor: '#FFBFC4',
//         borderWidth: 1.5,
//         borderRadius: windowWidth * 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: windowHeight * 0.040,
//         width: windowWidth * 0.340,
//     },
//     wrapping_icon_top:{
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         width: '30%',
//         // marginLeft: windowWidth * 0.030,
//     },
//     header_show:{
//         alignItems: 'center',
//     },
//     header_live:{
//         alignItems: 'center',
//     },
//     live:{
//         width: '100%',
//         height: windowHeight * 0.6,
//     },
//     responsif_koment:{
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//     },
//     header_koment:{
//         backgroundColor: 'rgba(0, 0, 0, 0.3)',
//         height: windowHeight * 0.2,
//         width: '97%',
//         marginTop: windowHeight * 0.030,
//         borderRadius: windowWidth * 0.030,
//     },
//     nav_down:{
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     button_input:{
//         // backgroundColor: 'rgba(0, 0, 0, 0.2)',
//         borderWidth: 1,
//         borderColor: '#E2E2E2',
//         width: '55%',
//         height: windowHeight * 0.055,
//         borderRadius: windowWidth * 0.1,
//         marginTop: windowHeight * 0.007,
//         // paddingLeft: windowWidth * 0.050,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button_nav:{
//         height: windowHeight * 0.050,
//         width: windowWidth * 0.160,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: windowWidth * 0.050,
//     },
//     modalContainer: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     commentContainer: {
//       padding: 10,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              bvvbmmmmmmm                                                                                                             
//       borderTopLeftRadius: windowWidth * 0.050, 
//       borderTopRightRadius: windowWidth * 0.050, 
//     },
//     commentInput:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
//       color: '#F5F7F8',
//       width: '100%',
//       borderWidth: 0.5,
//       borderColor: '#F5F7F8',
//       borderRadius: windowWidth * 0.1,
//       paddingLeft: windowWidth * 0.070,
//     },
//     closeButton:{
//       height: windowHeight * 0.050,
//       justifyContent: 'center',
//     },
//     close:{
//       color: '#F5F7F8',
//       marginLeft: windowWidth * 0.787,
//     },
// })