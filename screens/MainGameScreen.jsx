import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { Button, StyleSheet, View, Text, Alert } from "react-native";
import Card from '../components/UI/Card/Card';
import color from '../constants/color';
import { Ionicons } from '@expo/vector-icons';
import MyButton from '../components/UI/MyButton/MyButton';
import PreviousGuesses from '../components/PreviousGuesses/PreviousGuesses';


function MainGameScreen(props) {

    const { selectedNumber, onGameOver, onIncreaseRounds } = props
    const [exepectedNumber, setExepectedNumber] = useState(
        getRandomNumberBetween(100, 1, selectedNumber)
    )
    const minRef = useRef(1)
    const maxRef = useRef(100)
   
    
    
    /**
     * useEffect
     */
    useEffect(() => {
        if (exepectedNumber === selectedNumber) {

            onGameOver(selectedNumber)
        }
    }, [exepectedNumber, onGameOver])
    /**
     * 
     * @param {
     * } dission 
     * @returns 
     */
    const expectNumberHandler = (dission) => {
        onIncreaseRounds()
        const userNumber = selectedNumber;

        if ((dission === 'lower' && exepectedNumber < userNumber) ||
            (dission === 'greater' && exepectedNumber > userNumber)) {

            Alert.alert('Wrong', 'You clicked an wrong choice!', [{
                text: 'Sorry!', style: 'cancel'
            }])

            return '';
        }
        /**
         * 
         * 
         */
        if (dission === 'lower') {
            maxRef.current = exepectedNumber
        } else {
            minRef.current = exepectedNumber
        }
        /**
         * 
         * 
         */
        const nextNumber = getRandomNumberBetween(maxRef.current, minRef.current, userNumber);

        setExepectedNumber(nextNumber)
    }
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={{ fontSize: 20 }}>Oppoent's Guess!</Text>
                <View style={styles.selectedNumberContainer}>
                    <Text style={{ fontSize: 20 }}>{exepectedNumber}</Text>
                </View>
                <View style={styles.buttonContainer}>

                    <MyButton onPress={expectNumberHandler.bind(this, 'lower')} >
                        <Ionicons name="md-remove" size={24} color="white" />
                    </MyButton>

                    <MyButton onPress={expectNumberHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </MyButton>
                </View>
            </Card>
            
            <PreviousGuesses guesses={props.guesses} 
                    deleteGuess= {props.deleteGuess}
            /> 
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        alignItems: 'center',
        flex: 1
    },
    selectedNumberContainer: {
        borderColor: color.primary,
        borderRadius: 6,
        borderWidth: 2,
        padding: 10,
        marginVertical: 6
    },
    card: {
        alignItems: 'center',
        width: '80%'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    }
})

MainGameScreen.propTypes = {
    selectedNumber: propTypes.number.isRequired
}
export default MainGameScreen;


const getRandomNumberBetween = (max, min, execluded) => {

    const maxNum = Math.floor(max)
    const minNum = Math.ceil(min);

    const randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;


    return randomNumber


}