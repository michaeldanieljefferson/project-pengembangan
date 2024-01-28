import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Splashscreen, LoginPage, HomePage, ProfilePage, 
         ChangePassword, MindTest, CaracterTest, HasilTest, 
         DaftarPage, DataDiriPage, LiveShow, ChatPage, LupaPassword,
         InputUserEmail, Verification, SetPassword, StorePage,
         AssetPage, InCall, CallPage, VideoCallPage, RandomMeeting,
         FriendProfile, LiveMe } from './src/pages'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Splashscreen />
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}} />
          <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
          <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}} />
          <Stack.Screen name="MindTest" component={MindTest} options={{headerShown: false}} />
          <Stack.Screen name="CaracterTest" component={CaracterTest} options={{headerShown: false}} />
          <Stack.Screen name="HasilTest" component={HasilTest} options={{headerShown: false}} />
          <Stack.Screen name="DaftarPage" component={DaftarPage} options={{headerShown: false}} />
          <Stack.Screen name="DataDiriPage" component={DataDiriPage} options={{headerShown: false}} />
          <Stack.Screen name="LiveShow" component={LiveShow} options={{headerShown: false}} />
          <Stack.Screen name="ChatPage" component={ChatPage} options={{headerShown: false}} />
          <Stack.Screen name="LupaPassword" component={LupaPassword} options={{headerShown: false}} />
          <Stack.Screen name="InputUserEmail" component={InputUserEmail} options={{headerShown: false}} />
          <Stack.Screen name="Verification" component={Verification} options={{headerShown: false}} />
          <Stack.Screen name="SetPassword" component={SetPassword} options={{headerShown: false}} />
          <Stack.Screen name="StorePage" component={StorePage} options={{headerShown: false}} />
          <Stack.Screen name="AssetPage" component={AssetPage} options={{headerShown: false}} />
          <Stack.Screen name="CallPage" component={CallPage} options={{headerShown: false}} />
          <Stack.Screen name="VideoCallPage" component={VideoCallPage} options={{headerShown: false}} />
          <Stack.Screen name="RandomMeeting" component={RandomMeeting} options={{headerShown: false}} />
          <Stack.Screen name="FriendProfile" component={FriendProfile} options={{headerShown: false}} />
          <Stack.Screen name="LiveMe" component={LiveMe} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;