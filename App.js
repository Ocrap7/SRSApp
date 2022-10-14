import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import Controls from './Controls';
import Deck from './Deck';
import DeckList from './DeckList';

export default function App() {
  const [currentDeck, setCurrentDack] = useState();
  if (currentDeck) {
    return <SafeAreaView style={{ ...styles.container, alignItems: 'center' }}>
      <View style={{ padding: 20 }}>
        <Deck cards={currentDeck.cards} />
      </View>
    </SafeAreaView>
  } else {
    return <SafeAreaView style={styles.container}>
      <View style={{...styles.container, padding: 20}}>
        <DeckList onDeckSelect={item => setCurrentDack(item)} />
      </View>
    </SafeAreaView>
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#d1d0c5"
  },
  container: {
    flex: 1,
    backgroundColor: '#323437',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
