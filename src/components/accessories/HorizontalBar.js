import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
import { Colors } from '../../constants';

export const HorizontalBar = ({ elements, activeIndex, setActiveIndex }) => {
  const Element = ({ element, isActive, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        {isActive ? (
          // <LinearTextGradient
          //   style={styles.element}
          //   colors={[Colors.blue, Colors.green]}
          //   start={{ x: 0, y: 1 }}
          //   end={{ x: 1, y: 0 }}>
          //   {element}
          // </LinearTextGradient>
          <LinearTextGradient
            style={{ fontWeight: 'bold', fontSize: 72 }}
            locations={[0, 1]}
            colors={['red', 'blue']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            THIS IS TEXT GRADIENT
          </LinearTextGradient>
        ) : (
          <Text style={styles.element}>{element}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {elements?.map((element, index) => (
        <Element
          element={element}
          isActive={index === activeIndex}
          onPress={() => setActiveIndex(index)}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  element: {
    marginRight: 30,
    fontFamily: 'SFUIText-Medium',
    fontSize: 16,
    //color: Colors.lightGray,
  },
});
