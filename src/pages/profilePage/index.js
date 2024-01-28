import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Background, User, Peta, Down } from '../../asset';
import { Edit, Back, Location } from '../../asset';
import ImageCropPicker from 'react-native-image-crop-picker';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      profileData: {
        name: 'Michael Daniel Jefferson',
        age: '24 Thn',
        tanggal: '11',
        bulan: '2',
        tahun: '2020',
        occupation: 'UI & UX Desainer',
        hobby: 'belajar',
        city: 'Manado',
      },
      formData: {
        name: 'Michael Daniel Jefferson',
        age: '24 Thn',
        tanggal: '11',
        bulan: '2',
        tahun: '2020',
        occupation: 'UI & UX Desainer',
        hobby: 'belajar',
        city: 'Manado',
      },
      profileImage: User,

      isOpenkerja: false,
      selectedValuekerja: '',

      isOpenhobi: false,
      selectedValuehobi: '',
      
      isOpenalamat: false,
      selectedValuealamat: '',
    };
  }

  toggleDropkerja = () => {
    this.setState({ isOpenkerja: !this.state.isOpenkerja });
  };

  handleSelectkerja = (value) => {
    this.setState({ selectedValuekerja: value, isOpenkerja: false });
  };

  occupations = ['SD', 'SMP', 'SMA', 'Kuliah', 'Teknologi Informasi (TI)', 'Bisnis dan Manajemen',
                 'Kesehatan', 'Pendidikan', 'Seni dan Desain', 'Ilmu Pengetahuan', 'Kreatif',
                 'Teknik', 'Layanan Pelanggan', 'Keuangan dan Akuntansi', 'Penjualan dan Pemasaran',
                 'Logistik dan Transportasi', 'Layanan Sosial', 'Konstruksi dan Bangunan',
                 'Pertanian dan Peternakan', 'Pariwisata dan Perhotelan'];
  
  toggleDrophobi = () => {
    this.setState({ isOpenhobi: !this.state.isOpenhobi });
  };

  handleSelecthobi = (value) => {
    this.setState({ selectedValuehobi: value, isOpenhobi: false});
  };

  hobbies = ['Permainan', 'Musik', 'Seni', 'Kuliner', 'Olahraga', 'Kegiatan Sosial', 
             'Desain', 'Koleksi', 'Bacaan', 'Petualangan', 'Film', 'Belajar', 'Investasi',
             'Meditasi'];
  
  toggleDropalamat = () => {
    this.setState({ isOpenalamat: !this.state.isOpenalamat });
  };

  handleSelectalamat = (value) => {
    this.setState({ selectedValuealamat: value, isOpenalamat: false });
  };

  cities = ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Bengkulu',
                  'Sumatera Selatan', 'Kepulauan Bangka Belitung', 'Lampung', 'Banten', 'Jakarta (DKI Jakarta)',
                  'Jawa Barat', 'Jawa Tengah', 'Yogyakarta (DI Yogyakarta)', 'Jawa Timur', 'Bali', 
                  'Nusa Tenggara Barat (NTB)', 'Nusa Tenggara Timur (NTT)', 'Kalimantan Barat', 
                  'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara',
                  'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara',
                  'Sulawesi Barat', 'Gorontalo', 'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua'];

  handleChange = (field, value) => {
    this.setState({ formData: { ...this.state.formData, [field]: value } });
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  saveProfile = () => {
    const { formData } = this.state;
    this.setState({ profileData: formData, editing: false });
  };

  openImagePicker = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        cropping: true,
      });

      this.setState({ profileImage: { uri: image.path } });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { navigation } = this.props;
    const { isOpenkerja, selectedValuekerja,
            isOpenhobi, selectedValuehobi,
            isOpenalamat, selectedValuealamat, } = this.state;
    return (
      <ImageBackground source={Background} style={styles.background_container}>
        <View style={styles.top_navigation}>
          <TouchableOpacity style={styles.button_back} onPress={() => navigation.navigate('HomePage')}>
            <Image source={Back} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.profile}>Profile</Text>
        </View>
        <View style={styles.wrapping_content}>
          
          {this.state.editing ? (
            <ScrollView style={styles.scroll}>
              <View style={styles.header_input}>
                <TouchableOpacity style={styles.profileImage} onPress={this.openImagePicker}> 
                  <Image source={this.state.profileImage} style={styles.profileImage} />
                </TouchableOpacity>
                <TextInput
                  style={styles.valueInput}
                  value={this.state.formData.name}
                  placeholder='nama'
                  placeholderTextColor={'gray'}
                  onChangeText={(text) => this.handleChange('name', text)}
                />
                <TextInput
                  style={styles.valueInput}
                  value={this.state.formData.age}
                  placeholder='umur'
                  placeholderTextColor={'gray'}
                  keyboardType='numeric'
                  onChangeText={(text) => this.handleChange('age', text)}
                  maxLength={2}
                />
                <TextInput
                  style={styles.valueInput}
                  placeholder="00" 
                  placeholderTextColor={'gray'}
                  onChangeText={(text) => {
                    if (/^\d+$/.test(text)) {
                      if (text.length <= 2) {
                        const numericValue = parseInt(text, 10);
                        if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 31) {
                          this.setState({ formData: { ...this.state.formData, tanggal: text } });
                        } else {
                          this.setState({ formData: { ...this.state.formData, tanggal: '' } });
                        }
                      }
                    } else if (text === '') {
                      this.setState({ formData: { ...this.state.formData, tanggal: '' } });
                    }
                  }}
                  value={this.state.formData.tanggal}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.valueInput}
                  placeholder="00"
                  placeholderTextColor={'gray'}
                  onChangeText={(text) => {
                    if (/^\d+$/.test(text)) {
                      if (text.length <= 2) {
                        const numericValue = parseInt(text, 10);
                        if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 12) {
                          this.setState({ formData: { ...this.state.formData, bulan: text } });
                        } else {
                          this.setState({ formData: { ...this.state.formData, bulan: '' } });
                        }
                      }
                    } else if (text === '') {
                      this.setState({ formData: { ...this.state.formData, bulan: '' } });
                    }
                  }}
                  value={this.state.formData.bulan}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.valueInput}
                  placeholder="0000"
                  placeholderTextColor={'gray'}
                  onChangeText={(text) => {
                    if (/^\d+$/.test(text)) {
                      if (text.length <= 4) {
                        const numericValue = parseInt(text, 10);
                        if (!isNaN(numericValue) && numericValue >= 1) {
                          this.setState({ formData: { ...this.state.formData, tahun: text } });
                        } else {
                          this.setState({ formData: { ...this.state.formData, tahun: '' } });
                        }
                      }
                    } else if (text === '') {
                      this.setState({ formData: { ...this.state.formData, tahun: '' } });
                    }
                  }}
                  value={this.state.formData.tahun}
                  keyboardType="numeric"
                  maxLength={4}
                />
                <View style={styles.header_select}>
                  <TouchableOpacity onPress={this.toggleDropkerja} style={styles.buton_select}>
                    <Text style={styles.text_hobi}>{selectedValuekerja || 'Apa pekerjaan mu ?'}</Text>
                  </TouchableOpacity>
                  <Image source={Down} />
                </View>
                {isOpenkerja && (
                  <View style={styles.header_menu}>
                    {this.occupations.map((occupation) => (
                      <TouchableOpacity style={styles.button_menu} key={occupation} onPress={() => this.handleSelectkerja(occupation)}>
                        <Text style={styles.text_menu}>{occupation}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                <View style={styles.header_select}>
                  <TouchableOpacity onPress={this.toggleDrophobi} style={styles.buton_select}>
                    <Text style={styles.text_hobi}>{selectedValuehobi || 'Apa hobi mu ?'}</Text>
                  </TouchableOpacity>
                  <Image source={Down} style={styles.down}/>
                </View>
                {isOpenhobi && (
                    <View style={styles.header_menu}>
                      {this.hobbies.map((hobby) => (
                        <TouchableOpacity style={styles.button_menu} key={hobby} onPress={() => this.handleSelecthobi(hobby)}>
                          <Text style={styles.text_menu}>{hobby}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                <View style={styles.header_select}>
                  <TouchableOpacity onPress={this.toggleDropalamat} style={styles.buton_select}>
                    <Text style={styles.text_hobi}>{selectedValuealamat || 'Apa nama provinsi mu ?'}</Text>
                  </TouchableOpacity>
                  <Image source={Location} style={styles.down}/>
                </View>
                {isOpenalamat && (
                    <View style={styles.header_menu}>
                      {this.cities.map((city) => (
                        <TouchableOpacity style={styles.button_menu} key={city} onPress={() => this.handleSelectalamat(city)}>
                          <Text style={styles.text_menu}>{city}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                <TouchableOpacity style={styles.button} onPress={this.saveProfile}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : (
            <View>
              <Image source={User} style={styles.profileImage} />
              <View style={styles.header_data}>
                <View style={styles.wrapping_data}>
                  <Text style={styles.data}>Nama</Text>
                  <Text style={styles.data}>Umur</Text>
                  <Text style={styles.data}>Lahir</Text>
                  <Text style={styles.data}>Pekerjaan</Text>
                  <Text style={styles.data}>Hobi</Text>
                  <Text style={styles.data}>Alamat</Text>
                </View>
                <View style={styles.wrapping_data}>
                  <Text style={styles.data}>: {this.state.profileData.name}</Text>
                  <Text style={styles.data}>: {this.state.profileData.age}</Text>
                  <View style={styles.header_birtday}>
                    <Text style={styles.data}>: {this.state.profileData.tanggal}/</Text>
                    <Text style={styles.data}>{this.state.profileData.bulan}/</Text>
                    <Text style={styles.data}>{this.state.profileData.tahun}</Text>
                  </View>
                  <Text style={styles.data}>: {this.state.profileData.occupation}</Text>
                  <Text style={styles.data}>: {this.state.profileData.hobby}</Text>
                  <Text style={styles.data}>: {this.state.profileData.city}</Text>
                </View>
              </View>
            </View>
          )}
          <View style={styles.header_edit}>
            <TouchableOpacity style={styles.button_edit} onPress={this.toggleEdit}>
              <Image source={Edit} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background_container: {
    flex: 1,
  },
  top_navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('10%'),
    padding: widthPercentageToDP('5%'),
  },
  back: {
    height: heightPercentageToDP('3%'),
    width: widthPercentageToDP('3%'),
  },
  profile: {
    color: 'black',
    // fontSize: widthPercentageToDP('5.6%'),
    fontSize: 20,
    fontWeight: '500',
    marginBottom: heightPercentageToDP('-0.5%'),
  },
  button_back: {
    justifyContent: 'center',
    width: widthPercentageToDP('10%'),
    height: heightPercentageToDP('5%'),
    marginTop: heightPercentageToDP('0.5%'),
  },
  wrapping_content: {
    padding: widthPercentageToDP('4%'),
  },
  profileImage: {
    // width: widthPercentageToDP('34.6%'),
    // height: heightPercentageToDP('17.5%'),
    width: 120,
    height: 120,
    borderRadius: widthPercentageToDP('50%'),
    alignSelf: 'center',
    marginTop: heightPercentageToDP('3.5%'),
    marginBottom: heightPercentageToDP('10%'),
  },
  header_data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: widthPercentageToDP('-2.5%'),
    marginBottom: heightPercentageToDP('15%'),
  },
  wrapping_data: {
    marginLeft: widthPercentageToDP('3%'),
  },
  data: {
    color: 'black',
    // fontSize: widthPercentageToDP('4.5%'),
    fontSize: 20,
    marginBottom: heightPercentageToDP('2%'),
    fontWeight: '500',
  },
  header_birtday:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_edit: {
    width: '100%',
    alignItems: 'flex-end',
  },
  button_edit: {
    width: widthPercentageToDP('13.8%'),
    height: heightPercentageToDP('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueInput: {
    color: 'black',
    borderRadius: widthPercentageToDP('1%'),
    borderColor: 'black',
    borderBottomWidth: 1,
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('80%'),
    margin: widthPercentageToDP('1%'),
    paddingLeft: widthPercentageToDP('5%'),
    fontWeight: '500',
  },
  header_select:{
    borderRadius: widthPercentageToDP('1%'),
    borderColor: 'black',
    borderBottomWidth: 1,
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('80%'),
    margin: widthPercentageToDP('1%'),
    paddingLeft: widthPercentageToDP('5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buton_select:{
    height: heightPercentageToDP('5.6%'),
    justifyContent: 'center',
    width: widthPercentageToDP('72%'),
  },
  text_hobi:{
    color: 'black',
    fontWeight: '500',
  },
  header_menu:{
    width: widthPercentageToDP('72%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text_menu:{
    color: 'black',
    fontWeight: '500',
  },
  button_menu:{
    margin: widthPercentageToDP('1%'),
    borderWidth: 1,
    borderColor: 'black',
    height: heightPercentageToDP('5%'),
    paddingHorizontal: widthPercentageToDP('2%'),
    borderRadius: widthPercentageToDP('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_input: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentageToDP('10%'),
    backgroundColor: '#9F711C',
    marginBottom: heightPercentageToDP('10%'),
    marginTop: heightPercentageToDP('5%'),
  },
  buttonText:{
    color: 'white',
  },
});

export default ProfilePage;