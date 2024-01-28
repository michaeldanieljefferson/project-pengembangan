import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, 
         Image, ImageBackground, ScrollView, Alert } from 'react-native';
import { Background, KartunPria, KartunWanita, Location, Left, Down } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const DataDiriPage = ({ navigation }) => {
  const [tanggal, setTanggal] = useState('');
  const [bulan, setBulan] = useState('');
  const [tahun, setTahun] = useState('');
  const [umur, setUmur] = useState('');
  const [isOpenkerja, setIsOpenkerja] = useState(false);
  const [selectedValuekerja, setSelectedValuekerja] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [isOpenhobi, setIsOpenhobi] = useState(false);
  const [selectedValuehobi, setSelectedValuehobi] = useState('');
  const [isOpenalamat, setIsOpenalamat] = useState(false);
  const [selectedValuealamat, setSelectedValuealamat] = useState('');

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const handleSubmit = () => {
    if (tanggal && bulan && tahun && umur && occupations && selectedGender && selectedValuehobi && selectedValuealamat) {
      console.log('Tanggal Lahir:', tanggal);
      console.log('Bulan Lahir:', bulan);
      console.log('Tahun Lahir:', tahun);
      console.log('Umur:', umur);
      console.log('Pekerjaan:', occupations);
      console.log('Jenis Kelamin:', selectedGender);
      console.log('Hobi:', selectedValuehobi);
      console.log('Alamat:', selectedValuealamat);
      navigation.navigate('LoginPage');
    } else {
      // Tampilkan notifikasi atau pemberitahuan kepada pengguna
        Alert.alert(
          'Hii bestieee👋😊 isi data diri dulu okey 😃👍',
          '',
          [
              {
                  text: 'OK',
              },
          ],
          { cancelable: false }
      );
    }
  };

  const toggleDropkerja = () => {
    setIsOpenkerja(!isOpenkerja);
  };

  const handleSelectkerja = (value) => {
    setSelectedValuekerja(value);
    setIsOpenkerja(false);
  };

  const occupations = ['SD', 'SMP', 'SMA', 'Kuliah', 'Teknologi Informasi (TI)', 'Bisnis dan Manajemen',
                      'Kesehatan', 'Pendidikan', 'Seni dan Desain', 'Ilmu Pengetahuan', 'Kreatif',
                      'Teknik', 'Layanan Pelanggan', 'Keuangan dan Akuntansi', 'Penjualan dan Pemasaran',
                      'Logistik dan Transportasi', 'Layanan Sosial', 'Konstruksi dan Bangunan',
                      'Pertanian dan Peternakan', 'Pariwisata dan Perhotelan']
  const toggleDrophobi = () => {
    setIsOpenhobi(!isOpenhobi);
  };

  const handleSelecthobi = (value) => {
    setSelectedValuehobi(value);
    setIsOpenhobi(false);
  };

  const hobbies = ['Permainan', 'Musik', 'Seni', 'Kuliner', 'Olahraga', 'Kegiatan Sosial', 
                   'Desain', 'Koleksi', 'Bacaan', 'Petualangan', 'Film', 'Belajar', 'Investasi',
                   'Meditasi'];
  
  const toggleDropalamat = () => {
    setIsOpenalamat(!isOpenalamat);
  };

  const handleSelectalamat = (value) => {
    setSelectedValuealamat(value);
    setIsOpenalamat(false);
  };

  const cities = ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Bengkulu',
                  'Sumatera Selatan', 'Kepulauan Bangka Belitung', 'Lampung', 'Banten', 'Jakarta (DKI Jakarta)',
                  'Jawa Barat', 'Jawa Tengah', 'Yogyakarta (DI Yogyakarta)', 'Jawa Timur', 'Bali', 
                  'Nusa Tenggara Barat (NTB)', 'Nusa Tenggara Timur (NTT)', 'Kalimantan Barat', 
                  'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara',
                  'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara',
                  'Sulawesi Barat', 'Gorontalo', 'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua'];
  return (
    <ImageBackground style={style.background_container} source={Background}>
      <View style={style.container}>
        <View style={style.header_position}>
          <View style={style.line_page}/>
          <View style={style.line_page}/>
          <View style={style.line_page}/>
          <View style={style.line_page}/>
          <View style={style.line_now}/>
        </View>
        <View style={style.judul}>
          <Text style={style.mind}>Data Diri</Text>
        </View>
      </View>
      <ScrollView>
        <View style={style.content_position}>
          <Text style={style.deskripsi_tbl_lahir}>TGL/BLN/THN_LAHIR</Text>
          <View style={style.wrapping_tbt}>
            <View style={style.header_input_tbl}>
              <TextInput
                style={style.input_tbl}
                placeholder="00" 
                placeholderTextColor={'gray'}
                onChangeText={(text) => {
                  if (/^\d+$/.test(text)) {
                    if (text.length <= 2) {
                      const numericValue = parseInt(text, 10);
                      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 31) {
                        setTanggal(text);
                      } else {
                        setTanggal('');
                      }
                    }
                  } else if (text === '') {
                    setTanggal('');
                  }
                }}
                value={tanggal}
                keyboardType="numeric"
              />
            </View>
            <View style={style.header_input_tbl}>
              <TextInput
                style={style.input_tbl}
                placeholder="00"
                placeholderTextColor={'gray'}
                onChangeText={(text) => {
                  if (/^\d+$/.test(text)) {
                    if (text.length <= 2) {
                      const numericValue = parseInt(text, 10);
                      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 12) {
                        setBulan(text);
                      } else {
                        setBulan('');
                      }
                    }
                  } else if (text === '') {
                    setBulan('');
                  }
                }}
                value={bulan}
                keyboardType="numeric"
              />
            </View>
            <View style={style.header_input_tbl}>
              <TextInput
                style={style.input_tbl}
                placeholder="0000"
                placeholderTextColor={'gray'}
                onChangeText={(text) => {
                  if (/^\d+$/.test(text)) {
                    if (text.length <= 4) {
                      const numericValue = parseInt(text, 10);
                      if (!isNaN(numericValue) && numericValue >= 1) {
                        setTahun(text);
                      } else {
                        setTahun('');
                      }
                    }
                  } else if (text === '') {
                    setTahun('');
                  }
                }}
                value={tahun}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
          </View>
          <View style={style.wrapping_input}>
            <TextInput
              style={style.input}
              placeholder="Masukkan Umur"
              placeholderTextColor={'gray'}
              keyboardType="numeric"
              value={umur}
              onChangeText={(text) => {
                  if (/^\d+$/.test(text)) {
                    if (text.length <= 2) {
                      const numericValue = parseInt(text, 10);
                      if (!isNaN(numericValue) && numericValue >= 1) {
                        setUmur(text);
                      } else {
                        setUmur('');
                      }
                    }
                  } else if (text === '') {
                    setUmur('');
                  }
                }}
            />
          </View>
          <View style={style.header_select}>
            <TouchableOpacity onPress={toggleDropkerja} style={style.buton_select}>
              <Text style={style.text_hobi}>{selectedValuekerja || 'Apa pekerjaan mu ?'}</Text>
            </TouchableOpacity>
            <Image source={Down} style={style.down}/>
          </View>
          {isOpenkerja && (
              <View style={style.header_menu}>
                {occupations.map((occupation) => (
                  <TouchableOpacity style={style.button_menu} key={occupation} onPress={() => handleSelectkerja(occupation)}>
                    <Text style={style.text_menu}>{occupation}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          <View style={style.wrapping_button_gander}>
            <TouchableOpacity
              style={[style.button_gender_pria, selectedGender === 'Pria' && { backgroundColor: '#FF0101' }]}
              onPress={() => handleGenderSelection('Pria')}
            >
              <View style={style.wrapping_icon_gander}>
                <Image style={style.kartunpria} source={KartunPria} />
              </View>
              <View style={style.header_text_gender}>
                <Text style={[style.text_gender, selectedGender === 'Pria' && { color: '#FFFFFF' }]}>
                  Pria
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[style.button_gender_wanita, selectedGender === 'Wanita' && { backgroundColor: '#FF0101' }]}
              onPress={() => handleGenderSelection('Wanita')}
            >
            
              <View style={style.wrapping_icon_gander}>
                <Image style={style.kartunpria} source={KartunWanita} />
              </View>
              <View style={style.header_text_gender}>
                <Text style={[style.text_gender, selectedGender === 'Wanita' && { color: '#FFFFFF' }]}>
                  Wanita
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.header_select}>
            <TouchableOpacity onPress={toggleDrophobi} style={style.buton_select}>
              <Text style={style.text_hobi}>{selectedValuehobi || 'Apa hobi mu ?'}</Text>
            </TouchableOpacity>
            <Image source={Down} style={style.down}/>
          </View>
          {isOpenhobi && (
              <View style={style.header_menu}>
                {hobbies.map((hobby) => (
                  <TouchableOpacity style={style.button_menu} key={hobby} onPress={() => handleSelecthobi(hobby)}>
                    <Text style={style.text_menu}>{hobby}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          <View style={style.header_alamat}>
            <TouchableOpacity onPress={toggleDropalamat} style={style.buton_select}>
              <Text style={style.text_hobi}>{selectedValuealamat || 'Apa nama kota mu ?'}</Text>
            </TouchableOpacity>
            <Image source={Location} style={style.down}/>
          </View>
          {isOpenalamat && (
              <View style={style.header_menu}>
                {cities.map((city) => (
                  <TouchableOpacity style={style.button_menu} key={city} onPress={() => handleSelectalamat(city)}>
                    <Text style={style.text_menu}>{city}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          <View style={style.header_button}>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DaftarPage')}>
              <Image source={Left} />
            </TouchableOpacity>
            <TouchableOpacity style={style.button}  onPress={handleSubmit}>
              {/* <Image source={Right} /> */}
              <Text style={style.selesai}>Selesai</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default DataDiriPage;

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
    marginBottom: heightPercentageToDP('7.3%'),
  },
  mind: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('5.6%'),
  },
  content_position: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP('2.8%'),
  },
  deskripsi_tbl_lahir: {
    color: 'black',
    fontWeight: '500',
    marginLeft: widthPercentageToDP('-35%'),
  },
  input_tbl: {
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('23%'),
    borderRadius: widthPercentageToDP('3%'),
    paddingLeft: widthPercentageToDP('7%'),
    color: 'black',
  },
  input: {
    height: heightPercentageToDP('5.7%'),
    borderColor: 'black',
    width: '90%',
    color: 'black',
  },
  wrapping_input: {
    backgroundColor: 'white',
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('72%'),
    borderRadius: widthPercentageToDP('10%'),
    margin: widthPercentageToDP('0.9%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('3.5%'),
  },
  wrapping_tbt: {
    flexDirection: 'row',
    marginBottom: heightPercentageToDP('3.5%'),
  },
  header_input_tbl: {
    backgroundColor: 'white',
    borderRadius: widthPercentageToDP('10%'),
    margin: widthPercentageToDP('0.9%'),
    width: widthPercentageToDP('23%'),
  },
  header_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: heightPercentageToDP('6%'),
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
  wrapping_button_gander: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: heightPercentageToDP('3.5%'),
    marginTop: heightPercentageToDP('3.5%'),
    width: widthPercentageToDP('72.3%'),
  },
  button_gender_pria: {
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('34.8%'),
    backgroundColor: '#FFFFFF',
    borderRadius: widthPercentageToDP('10%'),
    padding: widthPercentageToDP('0.6%'),
    flexDirection: 'row',
    marginRight: widthPercentageToDP('0.7%'),
  },
  button_gender_wanita: {
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('34.8%'),
    backgroundColor: '#FFFFFF',
    borderRadius: widthPercentageToDP('10%'),
    padding: widthPercentageToDP('0.6%'),
    flexDirection: 'row',
    marginLeft: widthPercentageToDP('0.7%'),
  },
  wrapping_icon_gander: {
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('10%'),
    borderRadius: widthPercentageToDP('5%'),
  },
  kartunpria: {
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('10%'),
  },
  header_text_gender: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP('17%'),
  },
  text_gender: {
    color: '#000000',
  },
  header_select:{
    backgroundColor: 'white',
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('72%'),
    borderRadius: widthPercentageToDP('10%'),
    marginBottom: heightPercentageToDP('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_alamat:{
    backgroundColor: 'white',
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('72%'),
    borderRadius: widthPercentageToDP('10%'),
    marginBottom: heightPercentageToDP('1%'),
    marginTop: heightPercentageToDP('3.5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buton_select:{
    height: heightPercentageToDP('5.6%'),
    width: widthPercentageToDP('72%'),
    justifyContent: 'center',
    paddingLeft: widthPercentageToDP('5%'),
    borderRadius: widthPercentageToDP('3%'),
  },
  text_hobi:{
    color: 'black',
  },
  down:{
    position: 'absolute',
    marginLeft: widthPercentageToDP('64.5%'),
  },
  header_menu:{
    width: widthPercentageToDP('72%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button_menu:{
    backgroundColor: 'white',
    margin: widthPercentageToDP('1%'),
    height: heightPercentageToDP('5%'),
    paddingHorizontal: widthPercentageToDP('2%'),
    borderRadius: widthPercentageToDP('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_menu:{
    color: 'black',
  },
  selesai:{
    color: 'white',
  },
});



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const DataDiriPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState('');

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (value) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   const hobbies = ['Reading', 'Gaming', 'Sports', 'Cooking'];

//   return (
//     <View>
//       <TouchableOpacity onPress={toggleDropdown}>
//         <Text>{selectedValue || 'Apa hobi mu ?'}</Text>
//       </TouchableOpacity>
//       {isOpen && (
//         <View>
//           {hobbies.map((hobby) => (
//             <TouchableOpacity key={hobby} onPress={() => handleSelect(hobby)}>
//               <Text>{hobby}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default DataDiriPage;