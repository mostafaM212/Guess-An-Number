import React from 'react';
import propTypes from 'prop-types' ;
import { Button, StyleSheet, Text, View } from "react-native";
import color from '../../constants/color';
import Card from '../UI/Card/Card';
import MyButton from '../UI/MyButton/MyButton';

function DisplaySelectedNumber(props) {

    
    return ( 
        <View style={styles.container}>
          <Card style={styles.card}>
             <Text style={styles.text}>Selected Number</Text>
             <View style={styles.selectedNumberContainer}>
                <Text style={styles.text}>{props.selectedNumber}</Text>
             </View>
             
             <MyButton onPress={props.onStartGame} >START GAME!</MyButton>        
          </Card>
        </View>
     );
}
const styles = StyleSheet.create({
    container : {
         width : '80%',
    },
    text : {
        textAlign : 'center',
        fontSize : 18
    },
    selectedNumberContainer : {
        borderColor: color.primary,
        borderRadius: 6,
        borderWidth: 2,
        padding : 10 ,
        marginVertical : 6
    },
    card : {
        alignItems : 'center',
        padding : 10
    }
})

DisplaySelectedNumber.propTypes = {
    selectedNumber : propTypes.number.isRequired ,
    onStartGame : propTypes.func.isRequired
}
export default DisplaySelectedNumber;