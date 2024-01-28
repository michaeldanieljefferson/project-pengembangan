import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  ImageBackground,
  Image
} from 'react-native';
import { Background, Pria, Wanita } from '../../asset';
import { IconUser, CallIcon, VideoCallIcon, Emoji, Send, Back, Online } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ChatPage = ({ navigation }) => {
  useEffect(() => {
    console.log("NOW IN CHAT SCREEN");
    console.log("DATA SENT BY THE COMMUNITY:\n");
    console.log("DATA Pesan :\n");
  }, []);

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedSenderId, setSelectedSenderId] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const senderNumbers = [
    { id: 1, number: 'Sender1PhoneNumber' },
    { id: 2, number: 'Sender2PhoneNumber' },
  ];

  const handleSend = () => {
    const currentTime = new Date();
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      timestamp: currentTime.toISOString(),
      senderId: selectedSenderId,
      profileImage: require('../../asset/gambar/pria.jpg'), // Replace with the actual path
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    sendToServer(newMessage);
  };

  const sendToServer = (message) => {
    const requestBody = {
      'nomor-masyarakat': 'RecipientPhoneNumber',
      'nomor-pengepul': 'YourPhoneNumber',
      'chat-pengepul': message.text,
      'time-pengepul': message.timestamp,
      'id-pengepul': message.senderId,
    };

    // You may want to handle the server communication here
    // navigation.navigate('messagepengepul');
  };

  const messagesFlatList = useRef(null);

  const scrollToBottom = () => {
    if (messagesFlatList.current) {
      messagesFlatList.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <ImageBackground source={Background} style={styles.background_container}>
      <View style={styles.wrapping_nav}>
        <TouchableOpacity style={styles.button_back} onPress={() => navigation.navigate('HomePage')}>
          <Image source={Back} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.chat}>chat</Text>
        <Image source={Online}/>
      </View>
      <View style={styles.wrapping_content}>
        <Image
          source={Pria}
          style={styles.profileImage}
        />
        <Text style={styles.nama_kontak}>Michael Daniel Jefferson</Text>
        <View style={styles.nav_contain}>
          <TouchableOpacity style={styles.button_nav_con} onPress={() => navigation.navigate('FriendProfile')}>
            <Image source={IconUser} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_nav_con} onPress={() => navigation.navigate('CallPage')}>
            <Image source={CallIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_nav_con} onPress={() => navigation.navigate('VideoCallPage')}>
            <Image source={VideoCallIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        ref={messagesFlatList}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={
              item.senderId === selectedSenderId
                ? styles.userMessageContainer
                : styles.botMessageContainer
            }
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
          </View>
        )}
        onContentSizeChange={() => scrollToBottom()}
        onLayout={() => scrollToBottom()}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.icon_header}onPress={handleSend}>
          <ImageBackground
            source={Emoji}
            style={styles.box_icon}
            resizeMode="cover"
          ></ImageBackground>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="yuk chat dia..."
          placeholderTextColor={'gray'}
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Image
            source={Send}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Sender Number</Text>

            {senderNumbers.map((numberObj) => (
              <Pressable
                key={numberObj.id}
                style={styles.senderNumberItem}
                onPress={() => {
                  setSelectedSenderId(numberObj.id);
                  setModalVisible(false);
                }}
              >
                <Text>{numberObj.number}</Text>
              </Pressable>
            ))}

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background_container: {
    flex: 1,
    padding: widthPercentageToDP('2%'),
  },
  wrapping_nav: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPercentageToDP('96%'),
    height: heightPercentageToDP('6%'),
    paddingLeft: widthPercentageToDP('2.8%'),
  },
  button_back: {
    width: widthPercentageToDP('8%'),
    marginTop: heightPercentageToDP('0.5%'),
  },
  back: {
    height: heightPercentageToDP('3%'),
    width: widthPercentageToDP('3.3%'),
  },
  chat: {
    color: 'black',
    // fontSize: widthPercentageToDP('5.6%'),
    fontSize: 20,
    marginRight: widthPercentageToDP('65%'),
  },
  wrapping_content: {
    alignItems: 'center',
  },
  profileImage: {
    // width: widthPercentageToDP('27.8%'),
    // height: heightPercentageToDP('14%'),
    width: 100,
    height: 100,
    borderRadius: widthPercentageToDP('15%'),
  },
  nama_kontak: {
    fontSize: widthPercentageToDP('5.5%'),
    color: 'black',
    marginBottom: heightPercentageToDP('1%'),
  },
  nav_contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: widthPercentageToDP('0.3%'),
    borderWidth: widthPercentageToDP('0.3%'),
    borderColor: 'white',
    borderRadius: widthPercentageToDP('3%'),
    width: widthPercentageToDP('64%'),
    height: heightPercentageToDP('5.6%'),
    backgroundColor: '#FFB36A',
  },
  button_nav_con: {
    width: widthPercentageToDP('15%'),
    height: heightPercentageToDP('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP('9%'),
    height: heightPercentageToDP('4.5%'),
  },
  icon_header: {
    width: widthPercentageToDP('8%'),
    height: heightPercentageToDP('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userMessageContainer: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: heightPercentageToDP('1.5%'),
    padding: widthPercentageToDP('2.5%'),
    borderRadius: widthPercentageToDP('4%'),
    alignSelf: 'flex-end',
    maxWidth: '80%',
    borderBottomRightRadius: 0,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  botMessageContainer: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: widthPercentageToDP('2.5%'),
    borderRadius: widthPercentageToDP('4%'),
    alignSelf: 'flex-start',
    maxWidth: '80%',
    borderBottomLeftRadius: 0,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  messageText: {
    fontSize: widthPercentageToDP('4.5%'),
    color: 'black',
  },
  messageTimestamp: {
    fontSize: widthPercentageToDP('3%'),
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: widthPercentageToDP('2%'),
    borderRadius: widthPercentageToDP('10%'),
    borderColor: '#4e79a0',
    borderWidth: 1,
  },
  input: {
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('73%'),
    fontSize: widthPercentageToDP('4.5%'),
    color: 'black',
    paddingLeft: widthPercentageToDP('2.4%'),
  },
  sendButton: {
    width: widthPercentageToDP('11.5%'),
    height: heightPercentageToDP('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonText: {
    fontSize: widthPercentageToDP('4.5%'),
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: widthPercentageToDP('80%'),
    padding: widthPercentageToDP('5%'),
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: widthPercentageToDP('4.5%'),
    fontWeight: 'bold',
  },
  senderNumberItem: {
    padding: widthPercentageToDP('2.5%'),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    backgroundColor: '#4e79a0',
    padding: widthPercentageToDP('2.5%'),
    borderRadius: widthPercentageToDP('10%'),
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
  },
});

export default ChatPage;
