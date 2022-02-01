import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Button = ({ colors, text, textStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={styles.button}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});
