import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardView from './Card';
import Controls from './Controls';
import DeckView, { Deck } from './Deck';
import DeckList from './DeckList';
// import Sound from 'react-native-sound'
import { Audio } from 'expo-av'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Ionicons from '@expo/vector-icons/Ionicons';

// const Sound = React.lazy(() => import("react-native-sound"));

export default function App() {
  const [currentDeck, setCurrentDack] = useState<Deck>();
  const sound = new Audio.Sound();

  // useEffect(() => {
  //   sound.current.unloadAsync();
  // }, []);

  // async function playSound() {
  //   // await Audio.requestPermissionsAsync();
  //   console.log('Loading Sound');
  //   const sound = new Audio.Sound();
  //   const p = await sound.loadAsync({ uri: 'https://www.ipachart.com/mp3/Voiceless_epiglottal_fricative.mp3' })
  //   // const { sound } = await Audio.Sound.({ uri: 'https://www.ipachart.com/mp3/Voiceless_epiglottal_fricative.mp3' })
  //   // setSound(sound);

  //   console.log('Playing Sound');
  //   // await sound.setVolumeAsync(1.0);
  //   const pp = await sound.playAsync();
  // }

  const playSound = async () => {
    console.log("Loading Sound");

    await sound.loadAsync({ uri: 'https://www.ipachart.com/mp3/Voiceless_epiglottal_fricative.mp3' });

    console.log("playing sound");

    const checkLoaded = await sound.getStatusAsync();
    // if (checkLoaded.isLoaded === true) {
    //   console.log("Error in Loading mp3");
    // } else {
    await sound.playAsync();
    // }
  };

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //       console.log('Unloading Sound');
  //       sound.unloadAsync();
  //     }
  //     : undefined;
  // }, [sound]);

  // playSound()
  // useEffect(() => {
  //   const snd = async () => {

  //     const Sound = await import('./node_modules/react-native-sound');
  //     console.log(Sound)
  //     // Sound.setCategory('Playback')
  //     // Sound.setCategory('Playback')
  //     // const sound = new Sound('https://www.ipachart.com/mp3/Voiceless_epiglottal_fricative.mp3', undefined, err => {
  //     //   if (err) {
  //     //     console.log(err)
  //     //     return
  //     //   }

  //     //   sound.play(s => {
  //     //     console.log(s)
  //     //   })

  //     // })
  //   }
  //   snd()

  // }, [])



  if (currentDeck) {
    return <SafeAreaView style={{ ...styles.container, alignItems: 'center' }}>
      <View style={{ padding: 20 }}>
        <DeckView deck={currentDeck} />
      </View>
    </SafeAreaView>
  } else {
    return <SafeAreaView style={styles.container}>
      <View style={{ ...styles.container, padding: 20 }}>
        <DeckList onDeckSelect={item => setCurrentDack(item)} />
        <TouchableOpacity onPress={playSound}>
          <FontAwesomeIcon icon={faPlay} />
          {/* <Text> {"Sound"}</Text> */}
        </TouchableOpacity>
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
