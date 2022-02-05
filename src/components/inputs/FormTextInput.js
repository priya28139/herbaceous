import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../constants';

export const FormTextInput = ({
  label,
  value,
  onChangeValue,
  error,
  icon,
  onIconPress,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          { color: error ? Colors.red : Colors.lightestGray },
        ]}>
        {label}
      </Text>
      <View
        style={[
          styles.inputContainer,
          { borderBottomColor: error ? Colors.red : Colors.lightestGray },
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          placeholder={label}
          placeholderTextColor={Colors.darkerGray}
          style={styles.input}
          {...props}
        />
        {icon && (
          <TouchableOpacity onPress={onIconPress}>
            <Image source={icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.lightestGray,
    borderBottomWidth: 0.95,
    opacity: 0.6,
  },
  label: {
    color: Colors.lightGray,
    fontFamily: 'SFUIText-Regular',
    fontSize: 14,
  },
  input: {
    color: Colors.darkerGray,
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    paddingHorizontal: 0,
    paddingTop: 7,
    paddingBottom: 10,
  },
});
