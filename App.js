import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Button } from './src/components';
import { Colors } from './src/constants/Colors';

export const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ paddingHorizontal: 16 }}>
          <Button
            colors={[Colors.blue, Colors.green]}
            text={'hi there'}
            textStyle={{ color: Colors.white, fontFamily: 'SFUIText-Semibold' }}
            textColor={Colors.white}
          />
          <Button
            colors={[Colors.white, Colors.white]}
            text={'sign up'}
            textStyle={{
              color: Colors.darkerGray,
              fontFamily: 'SFUIText-Medium',
            }}
            textColor={Colors.darkerGray}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
