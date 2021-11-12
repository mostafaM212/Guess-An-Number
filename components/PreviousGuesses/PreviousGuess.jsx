import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import propTypes from "prop-types";
import Card from '../UI/Card/Card';
import color from '../../constants/color';

function PreviousGuess({ Guess, deleteGuess }) {
    return (
        <TouchableOpacity style={styles.constainer}
            onPress={deleteGuess.bind(this , Guess.key)}
            
            activeOpacity={.5}
        >

            <Card style={styles.card}>
                <Text style={styles.number}>Guessed number <Text style={{ color: color.secondary }}>{Guess.value}</Text></Text>
                <Text style={styles.number}>Rounds Number <Text style={{ color: color.secondary }}>{Guess.rounds}</Text></Text>
            </Card>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    card: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        
    },
    number: {
        fontSize: 18 ,
        paddingVertical : 5
    }
})

PreviousGuess.propTypes = {
    deleteGuess: propTypes.func.isRequired,
    Guess: propTypes.object.isRequired
}
export default PreviousGuess;