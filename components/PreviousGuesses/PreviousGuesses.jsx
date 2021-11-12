import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from 'react';
import color from "../../constants/color";
import propTypes from "prop-types";
import PreviousGuess from "./PreviousGuess";

function PreviousGuesses(props) {


    if (props.guesses.length !== 0) {


        return (
        
            <View style={styles.constainer}>
                <Text style={styles.title}>Previous Guesses!</Text>
                <ScrollView>
                    {
                        props.guesses.map(guess =><PreviousGuess Guess={guess} 
                                                        deleteGuess={props.deleteGuess}
                                                        key={guess.key}    
                                                        />)
                    }
                    
                </ScrollView>
            </View>
        
        );
    }
    return <Text></Text>
}

const styles = StyleSheet.create({
    constainer: {
        alignItems: 'center',
        width: '100%',
        flex : 1
    },
    title: {
        color: color.secondary,
        fontSize: 22,
        textAlign: 'center'
    }
})
PreviousGuesses.propTypes = {
    guesses: propTypes.array.isRequired
}
export default PreviousGuesses;