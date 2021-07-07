import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'
import diceOne from './assets/dice1.png'
import diceTwo from './assets/dice2.png'
import diceThree from './assets/dice3.png'
import diceFour from './assets/dice4.png'
import diceFive from './assets/dice5.png'
import diceSix from './assets/dice6.png'


const App = () => {

  const [dices,setdice] = useState(diceOne);
  const [dices2,setdice2] = useState(diceOne);

  const playButtonClick = () => {

    const number = Math.floor(Math.random() * 6) + 1;
    const number2 = Math.floor(Math.random() * 6) + 1;
    switch (number) {
      case 1:
        setdice(diceOne);
        break;
        case 2:
        setdice(diceTwo);
        break;
        case 3:
        setdice(diceThree);
        break;
        case 4:
        setdice(diceFour);
        break;
        case 5:
        setdice(diceFive);
        break;
        case 6:
        setdice(diceSix);
        break;
        default:
        setdice(diceOne);
        break;
    }
    switch (number2) {
      case 1:
        setdice2(diceOne);
        break;
        case 2:
        setdice2(diceTwo);
        break;
        case 3:
        setdice2(diceThree);
        break;
        case 4:
        setdice2(diceFour);
        break;
        case 5:
        setdice2(diceFive);
        break;
        case 6:
        setdice2(diceSix);
        break;
        default:
        setdice2(diceOne);
        break;
    }

  }
  return(

    <>
      <View style={styles.container}>
        
        
        <TouchableOpacity onPress={playButtonClick}>
        <Image style={styles.image} source={dices2}></Image>
        <Image style={styles.image} source={dices}></Image>
        </TouchableOpacity>
        <Text style={styles.playGameButton}>Tap the Dice</Text>
      </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({

  container: {

    flex : 1,
    alignItems : 'center', 
    justifyContent : 'center',
    backgroundColor : '#CD80CD80'
  },
  image: {
    height : 150,
    width : 150,
  },
  playGameButton: {

    fontSize : 20,
    marginTop : 20,
    color : "#101010",
    
    
  },

})