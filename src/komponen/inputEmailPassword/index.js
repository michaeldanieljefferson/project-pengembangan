import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Hide, Show } from '../../asset';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Input({ password, ...props }) {
  const [isFocus, setIsFocus] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          { borderColor: isFocus ? 'blue' : 'orange' },
        ]}
      >
        <TextInput
          secureTextEntry={hidePassword}
          {...props}
          style={styles.textInput}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
        {password && (
          <TouchableOpacity
            style={styles.showHide}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            {hidePassword ? (
              <Image style={styles.iconShowHide} source={Hide} />
            ) : (
              <Image style={styles.iconShowHide} source={Show} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: widthPercentageToDP('10%'),
    height: heightPercentageToDP('6.3%'),
    width: widthPercentageToDP('70%'),
    backgroundColor: '#EDF7FC',
    paddingHorizontal: widthPercentageToDP('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('5%'),
  },
  showHide: {
    marginRight: widthPercentageToDP('1.4%'),
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('8.3%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconShowHide: {
    width: widthPercentageToDP('5.7%'),
    height: heightPercentageToDP('1.9%'),
  },
  textInput: {
    marginLeft: widthPercentageToDP('5%'),
    color: 'black',
    flex: 1,
  },
});