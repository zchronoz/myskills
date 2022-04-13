import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface ISkillData {
  id: string;
  name: string;
}

export const Home = () => {
  const [skills, setSkills] = useState<ISkillData[]>([]);
  const [skillText, setSkillText] = useState('');
  const [gretting, setGretting] = useState('');

  const addSkill = () => {
    if (skillText && skills.find(c=> c.name === skillText) === undefined) {
      const newSkill: ISkillData = {
        id: String(Math.random()),
        name: skillText,
      }

      setSkills([...skills, newSkill]);
      setSkillText('');
    }
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter(c=> c.id !== id));
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Evening');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.greeting}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={skillText}
        onChangeText={e => setSkillText(e)}
      />

      <Button textButton="Add" onPress={addSkill} />

      <Text style={[styles.title, {marginTop: 30}]}>My skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        (
        <SkillCard 
          skillText={item.name} 
          onPress={() => handleRemoveSkill(item.id)} 
        />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  greeting: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
  },
});
