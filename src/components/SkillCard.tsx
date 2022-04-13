import React from 'react';
import {Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skillText: string
}

export const SkillCard: React.FC<SkillCardProps> = ({skillText, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skillText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 15,
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    marginTop: 12,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
