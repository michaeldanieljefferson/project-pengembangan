import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, Modal, TextInput, Image, FlatList, BackHandler } from 'react-native';
import { Pria, Wanita, Emoji, Send, Add, Down, Ceklist } from '../../asset';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default function RandomMeeting() {
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
    <View>
      <ImageBackground source={Pria} style={styles.image}>
        <View style={styles.navbar}>
          <Text style={{color: 'black', fontWeight: '500'}}>Michael Daniel Jefferson</Text>
          <TouchableOpacity style={styles.btn} onPress={handleAddPress}>
            <Image source={isAddChecked ? Add : Ceklist} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground source={Wanita} style={styles.imagewanita}>
        <FlatList
          style={styles.boxmassages}
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Pria} style={{width: 30, height: 30, borderRadius: 15,}}/>
                <Text style={{color: 'black', fontWeight: '500', margin: 7,}}>Michael Daniel Jefferson</Text>
              </View>
              <View style={item.sender === 'user' ? styles.userMessage : styles.otherMessage}>
                <Text style={styles.textmassage}>{item.text}</Text>
              </View>
            </View>
          )}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.input} onPress={toggleModal}>
            <Text style={{ color: 'white' }}>ketikan sesuatu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skip}>
            <Text style={{color: 'black', fontWeight: '500'}}>lewati</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.chatContainer}>
              <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
                <Image source={Down}/>
              </TouchableOpacity>
              <View style={styles.headerinput}>
                <TouchableOpacity>
                  <Image source={Emoji} />
                </TouchableOpacity>
                <TextInput
                  style={styles.modalInput}
                  placeholder='Ketikan sesuatu'
                  placeholderTextColor={"gray"}
                  multiline
                  value={inputText}
                  onChangeText={(text) => setInputText(text)}
                  blurOnSubmit={true}
                />
                <TouchableOpacity style={styles.modalSendButton} onPress={sendMessage}>
                  <Image source={Send} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%'),
  },
  imagewanita: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%'),
    justifyContent: 'flex-end',
  },
  navbar:{
    width: '100%',
    height: heightPercentageToDP('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: widthPercentageToDP('2%'),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  btn:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthPercentageToDP('45%'),
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: widthPercentageToDP('10%'),
    padding: widthPercentageToDP('1%'),
  },
  skip:{
    backgroundColor: 'white',
    width: widthPercentageToDP('15%'),
    height: heightPercentageToDP('5%'),
    marginBottom: heightPercentageToDP('1%'),
    marginLeft: widthPercentageToDP('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentageToDP('5%'),
  },
  headerprops_text:{
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: widthPercentageToDP('15%'),
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('6%'),
    marginLeft: widthPercentageToDP('1.5%'),
    paddingLeft: widthPercentageToDP('5%'),
    marginBottom: heightPercentageToDP('1%'),
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalCloseButton: {
    height: heightPercentageToDP('4%'),
    width: widthPercentageToDP('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentageToDP('5%'),
  },
  boxmassages:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: widthPercentageToDP('70%'),
    marginTop: heightPercentageToDP('20%'),
    borderRadius: widthPercentageToDP('5%'),
    padding: widthPercentageToDP('1%'),
  },
  chatContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: widthPercentageToDP('100%'),
    alignItems: 'center',
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
  userMessage: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
    marginLeft: widthPercentageToDP('8%'),
    marginTop: heightPercentageToDP('-2%'),
  },
  textmassage:{ 
    color: 'black',
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
});
