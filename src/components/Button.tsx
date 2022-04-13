import React from 'react';
import {Text, StyleSheet, Platform, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  textButton: string;
}

export const Button: React.FC<ButtonProps> = ({textButton, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
