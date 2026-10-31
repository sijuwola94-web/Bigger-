import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const FAKE_PEOPLE = [
  { id: '1', name: 'Alex, 22', city: 'Praia', vibe: 'Beach + Music', img: 'https://i.pravatar.cc/300?img=1' },
  { id: '2', name: 'Maya, 20', city: 'Mindelo', vibe: 'Dance + Sunset', img: 'https://i.pravatar.cc/300?img=2' },
  { id: '3', name: 'Jay, 23', city: 'Lisbon', vibe: 'Gym + Travel', img: 'https://i.pravatar.cc/300?img=3' },
  { id: '4', name: 'Sofia, 21', city: 'Praia', vibe: 'Art + Coffee', img: 'https://i.pravatar.cc/300?img=5' },
];

export default function App() {
  const [tab, setTab] = useState('discover');
  const [index, setIndex] = useState(0);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const person = FAKE_PEOPLE[index % FAKE_PEOPLE.length];

  const handleLike = () => {
    setFriends([...friends, person]);
    setIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.logo}>BIGGER</Text>
        <Text style={styles.sub}>Find new people</Text>
      </View>

      {tab === 'discover' && (
        <View style={styles.cardWrap}>
          <Image source={{uri: person.img}} style={styles.cardImg} />
          <View style={styles.cardInfo}>
            <Text style={styles.name}>{person.name} • {person.city}</Text>
            <Text style={styles.vibe}>{person.vibe}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={[styles.btn, styles.skip]} onPress={() => setIndex(index
