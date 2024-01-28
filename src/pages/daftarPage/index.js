import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Alert 
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Show, Hide, Left, Right } from '../../asset';
import { Background } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

class DaftarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fotoProfile: null,
      name: '',
      email: '',
      isFocus: false,
      password: '',
      confirmPassword: '',
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
    };
  }

  handleSignUp = () => {
    const { fotoProfile, name, email, password, confirmPassword } = this.state;

    // Check if required fields are filled
    if (!fotoProfile || !name || !email || !password || !confirmPassword) {
      Alert.alert('hii bestiee😃👋', 'kamu harus isi data diri dulu yaa okayy😀👍');
      return;
    } else {
      console.log('Profile Image:', fotoProfile);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      // If finalResult is greater than 30, navigate to CaracterTest
      this.props.navigation.navigate('DataDiriPage'); // Replace with the actual screen name
    }
  };

  togglePasswordVisibility = (field) => {
    if (field === 'password') {
      this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
    } else if (field === 'confirmPassword') {
      this.setState({ isConfirmPasswordVisible: !this.state.isConfirmPasswordVisible });
    }
  };

  openImagePicker = () => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
    }).then((image) => {
      this.setState({ fotoProfile: image });
    }).catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
      <ImageBackground style={style.backgroundContainer} source={Background}>
        <View style={style.container}>
          <View style={style.headerPosition}>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
            <View style={style.line_page}/>
            <View style={style.line_now}/>
            <View style={style.line_page}/>
          </View>
          <View style={style.judul}>
            <Text style={style.mind}>Daftar</Text>
          </View>
        </View>
        <View style={style.inputDaftar}>
          <TouchableOpacity style={style.fotoProfile} onPress={this.openImagePicker}>
            {this.state.fotoProfile ? (
              <Image source={{ uri: this.state.fotoProfile.path }} style={style.kontenfotoProfile} />
            ) : (
              <Image source={require('../../asset/icons/addPhoto.png')} />
            )}
          </TouchableOpacity>
          <View style={[style.inputContainer, { borderColor: this.state.isFocus ? 'blue' : 'orange' }]}>
            <TextInput
              style={style.input}
              placeholder="Name"
              placeholderTextColor={'black'}
              value={this.state.name}
              onChangeText={(text) => this.setState({ name: text })}
            />
          </View>
          <View style={[style.inputContainer, { borderColor: this.state.isFocus ? 'blue' : 'orange' }]}>
            <TextInput
              style={style.input}
              placeholder="Email"
              placeholderTextColor={'black'}
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={[style.inputContainer, { borderColor: this.state.isFocus ? 'blue' : 'orange' }]}>
            <TextInput
              style={style.input}
              placeholder="Password"
              placeholderTextColor={'black'}
              secureTextEntry={!this.state.isPasswordVisible}
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />
            <TouchableOpacity onPress={() => this.togglePasswordVisibility('password')} style={{ position: 'absolute', right: 10 }}>
              <View style={{ color: 'black' }}>
                {this.state.isPasswordVisible ? <Image source={Show} /> : <Image source={Hide} />}
              </View>
            </TouchableOpacity>
          </View>

          <View style={[style.inputContainer, { borderColor: this.state.isFocus ? 'blue' : 'orange' }]}>
            <TextInput
              style={style.input}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              secureTextEntry={!this.state.isConfirmPasswordVisible}
              value={this.state.confirmPassword}
              onChangeText={(text) => this.setState({ confirmPassword: text })}
            />
            <TouchableOpacity onPress={() => this.togglePasswordVisibility('confirmPassword')} style={{ position: 'absolute', right: 10 }}>
              <View style={{ color: 'black' }}>
                {this.state.isConfirmPasswordVisible ? <Image source={Show} /> : <Image source={Hide} />}
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.headerButton}>
            <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate('HasilTest')}>
              <Image source={Left} />
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={this.handleSignUp}>
              <Image source={Right} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  container: {
    padding: heightPercentageToDP('1.4%'),
  },
  headerPosition: {
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
  inputDaftar: {
    marginTop: heightPercentageToDP('2.2%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoProfile: {
    width: widthPercentageToDP('28%'),
    height: heightPercentageToDP('14%'),
    borderRadius: widthPercentageToDP('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7F8',
    marginBottom: heightPercentageToDP('2.8%'),
  },
  kontenfotoProfile: {
    width: widthPercentageToDP('28%'),
    height: heightPercentageToDP('14%'),
    borderRadius: widthPercentageToDP('15%'),
  },
  input: {
    height: heightPercentageToDP('5.5%'),
    borderColor: 'gray',
    padding: widthPercentageToDP('2.2%'),
    width: widthPercentageToDP('88%'),
    color: 'black',
  },
  inputContainer: {
    borderRadius: widthPercentageToDP('10%'),
    height: heightPercentageToDP('6.3%'),
    width: widthPercentageToDP('70%'),
    backgroundColor: 'white',
    borderColor: 'white',
    paddingHorizontal: widthPercentageToDP('1.4%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('3.5%'),
    paddingLeft: widthPercentageToDP('3%'),
  },
  headerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP('75%'),
    marginTop: heightPercentageToDP('8.6%'),
    marginBottom: heightPercentageToDP('-7%'),
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

export default DaftarPage;


// import React, { useState } from 'react';
// import { View, Button, Image } from 'react-native';
// import ImageCropPicker from 'react-native-image-crop-picker';

// const DaftarPage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const selectImage = () => {
//     ImageCropPicker.openPicker({
//       mediaType: 'photo',
//     }).then((image) => {
//       setSelectedImage(image);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };

//   return (
//     <View>
//       <Button title="Select Image" onPress={selectImage} />
//       {selectedImage && <Image source={{ uri: selectedImage.path }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// };

// export default DaftarPage;
