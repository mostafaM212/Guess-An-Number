
import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback ,ScrollView , Platform, SafeAreaView} from 'react-native';
import Header from './components/Header/Header';
import { GameOverScreen } from './screens/GameOverScreen';
import MainGameScreen from './screens/MainGameScreen';
import { StartGameScreen } from './screens/StartGameScreen';



export default function App() {
  const [selectedNumber, setSelectedNumber] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [rounds, setRounds] = useState(0)
  const [allGuesses, setAllGuesses] = useState([])
  /**
   * 
   * 
   */
  const newGameHandler = () => {
    setRounds(0);
    setGameOver(false)
    setSelectedNumber('')
  }

  /**
   * deleteGuess
   */
  const deleteGuess = (key) => {
    setAllGuesses(allGuesses => allGuesses.filter(guess => guess.key !== key))
  }
  var layout = <StartGameScreen onStartGame={(selectedNumber) => setSelectedNumber(+selectedNumber)} />;


  if (selectedNumber !== '' && !gameOver) {
    layout = <MainGameScreen selectedNumber={selectedNumber}
      onGameOver={() => {
        setGameOver(true)
        setAllGuesses(allGuesses => [...allGuesses, { key: Math.random() + '', rounds: rounds, value: selectedNumber }])

      }}
      onIncreaseRounds={() => setRounds(rounds => rounds + 1)}
      guesses={allGuesses}
      deleteGuess={deleteGuess}
    />
  }
  if (gameOver) {
    layout = <GameOverScreen expectedNumber={selectedNumber}
      numberOfRounds={rounds}
      newGame={newGameHandler}
    />
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header title="Guss An Number" />
        <ScrollView>
          <View style={{flex : 1}}>
          {
            layout
          }
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
