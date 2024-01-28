import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Animated,
  PanResponder,
} from 'react-native';
import {
  Background,
  AppName,
  Pria,
  Wanita,
  Settings,
  Live,
  Store,
  IconLogo,
  Close,
  Profil,
  Lock,
  ModeLight,
  Logout,
  Assets,
} from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      navButtons: [
        {
          image: Profil,
          text: 'Profil',
          onPress: () => {
            this.setModalVisible(false);
            this.props.navigation.navigate('ProfilePage');
          },
        },
        {
          image: Lock,
          text: 'Kata Sandi',
          onPress: () => {
            this.setModalVisible(false);
            this.props.navigation.navigate('ChangePassword');
          },
        },
        {
          image: ModeLight,
          text: 'Mode Gelap',
          // onPress: () => {
          //   this.setModalVisible(false);
          //   console.log('Mode Gelap');
          // },
        },
        {
          image: Assets,
          text: 'Asset',
          onPress: () => {
            this.setModalVisible(false);
            this.props.navigation.navigate('AssetPage');
          },
        },
        {
          image: Logout,
          text: 'Keluar',
          onPress: () => {
            this.handleButtonPress(false);
            console.log('Keluar');
          },
        },
      ],
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        if (gesture.dy > 0) {
          this.state.pan.setValue({ x: 0, y: gesture.dy });
        }
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dy > 50) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            this.setModalVisible(false);
            this.state.pan.setValue({ x: 0, y: 0 });
            this.state.opacity.setValue(1);
          });
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: true,
          }).start();
        }
      },
    });
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  handleButtonPress = () => {
    Alert.alert(
      'Confirm Dialog',
      'Apakah Anda yakin?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Keluar',
          onPress: () => {
            console.log('Keluar dilanjutkan dari HomeScreen.');
            this.props.navigation.navigate('LoginPage');
          },
        },
      ],
      { cancelable: false },
    );
  };

  render() {
    const { modalVisible, navButtons, pan, opacity } = this.state;
    const { navigation } = this.props;
    const animatedStyle = {
      transform: [{ translateY: pan.y }],
      opacity,
    };
    return (
      <ImageBackground source={Background} style={styles.backgroundContainer}>
        <View style={styles.topNavigation}>
          <View style={styles.wrappingAppname}>
            <Image style={styles.logo} source={AppName} />
          </View>
          <TouchableOpacity style={styles.settings} onPress={() => this.setModalVisible(true)}>
            <Image source={Settings} style={styles.iconSetting} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <ScrollView style={styles.scroll}>
          <TouchableOpacity style={styles.buttonChat} onPress={() => this.props.navigation.navigate('ChatPage')}>
            <Image source={Pria} style={styles.profileImage} />
            <View style={styles.kontak}>
              <Text style={styles.profileName}> John Doe</Text>
              <Text style={styles.kontenChat}>Apakah kita bisa berkencan.?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonChat} onPress={() => this.props.navigation.navigate('ChatPage')}>
            <Image source={Wanita} style={styles.profileImage} />
            <View style={styles.kontak}>
              <Text style={styles.profileName}> Jane Doe</Text>
              <Text style={styles.kontenChat}>kamu sedang apa.?</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.wrappingNavigation}>
          <TouchableOpacity style={styles.headerItem} onPress={() => navigation.navigate('StorePage')}>
            <Image source={Store} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerItem} onPress={() => navigation.navigate('RandomMeeting')}>
            <Image source={IconLogo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerItem} onPress={() => navigation.navigate('LiveShow')}>
            <Image source={Live} />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <Animated.View {...this.panResponder.panHandlers} style={[styles.pengaturan, animatedStyle]}>
            <View style={styles.header_close}>
              <TouchableOpacity
                style={styles.close_button}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Image source={Close} />
              </TouchableOpacity>
            </View>
            {navButtons.map((button) => (
              <TouchableOpacity
                key={button.text}
                style={styles.nav_button}
                onPress={button.onPress}
              >
                <Image source={button.image} />
                <Text style={styles.text_nav}>{button.text}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </Modal>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    flex: 1,
    padding: 0,
    margin: 0,
  },
  topNavigation: {
    flexDirection: 'row',
    width: '100%',
    height: heightPercentageToDP('6%'),
    alignItems: 'center',
    paddingLeft: widthPercentageToDP('3.4%'),
    justifyContent: 'space-between',
  },
  wrappingAppname: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settings: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP('12%'),
    height: heightPercentageToDP('6%'),
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    backgroundColor: '#F5F7F8',
    height: 0.3,
    marginBottom: heightPercentageToDP('4%'),
  },
  scroll: {
    width: '100%',
  },
  buttonChat: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: heightPercentageToDP('2.7%'),
    paddingLeft: widthPercentageToDP('3.4%'),
  },
  profileImage: {
    // height: heightPercentageToDP('9%'),
    // width: widthPercentageToDP('17%'),
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  kontak: {
    marginLeft: widthPercentageToDP('1.4%'),
  },
  profileName: {
    fontSize: heightPercentageToDP('2.8%'),
    color: 'black',
  },
  kontenChat: {
    fontSize: heightPercentageToDP('2.2%'),
    color: 'black',
    marginLeft: widthPercentageToDP('1.4%'),
  },
  wrappingNavigation: {
    flexDirection: 'row',
    width: '100%',
    height: heightPercentageToDP('8%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#F5F7F8',
    marginBottom: heightPercentageToDP('0.3'),
  },
  headerItem: {
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pengaturan:{
    backgroundColor: '#4A3000',
    width: '100%',
    height: heightPercentageToDP('50%'),
    borderTopRightRadius: widthPercentageToDP('7%'),
    borderTopLeftRadius: widthPercentageToDP('7%'),
    marginTop: heightPercentageToDP('53%'),
  },
  header_close:{
    width: '100%',
    alignItems: 'center',
  },
  close_button:{
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('4%'),
    alignItems: 'center',
    marginTop: heightPercentageToDP('0.5%'),
  },
  nav_button:{
    width: '100%',
    height: heightPercentageToDP('8%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: widthPercentageToDP('8%'),
  },
  text_nav:{
    color: 'white',
    fontSize: widthPercentageToDP('4.5%'),
    fontWeight: '500',
    marginLeft: widthPercentageToDP('15%'),
  },
});

export default HomePage;
