import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CameraKitCameraScreen, CameraKitCameraScreenConstants } from 'react-native-camera-kit';

const CameraScreen = () => {
  const onBottomButtonPressed = (event) => {
    // Logic untuk menghandle tombol capture atau tombol lainnya
  };

  return (
    <View style={styles.container}>
      <CameraKitCameraScreen
        actions={{ rightButtonText: 'Capture', leftButtonText: 'Cancel' }}
        onBottomButtonPressed={onBottomButtonPressed}
        flashMode={'auto'}
        cameraFlipMode={CameraKitCameraScreenConstants.cameraFlipMode.back}
        showFrame={true}
        scanBarcode={false}
        laserColor={'red'}
        frameColor={'yellow'}
        colorForScannerFrame={'black'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraScreen;