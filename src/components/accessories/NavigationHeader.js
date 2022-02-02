import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { Colors, Icons, Images } from '../../constants';

export const NavigationHeader = ({
  onBackPress,
  title,
  profile,
  onEllipsisPress,
}) => {
  return (
    <View style={styles.navigationBar}>
      <View style={styles.topContainer}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress}>
            <Image source={Icons.back} />
          </TouchableOpacity>
        )}
        {onEllipsisPress && (
          <TouchableOpacity onPress={onEllipsisPress}>
            <Image source={Icons.ellipsis} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {profile && <Image source={Images.user} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    width: '100%',
    marginTop: 26,
    paddingHorizontal: 16,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 34,
  },
  title: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 26,
    color: Colors.darkerGray,
  },
});
