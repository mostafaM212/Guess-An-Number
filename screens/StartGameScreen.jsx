// @flow 
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import Confirm from '../components/Confirm/Confirm';
import DisplaySelectedNumber from '../components/Home/DisplaySelectedNumber';
import HomeButtonContainer from '../components/Home/HomeButtonContainer';
import Card from '../components/UI/Card/Card';
import MyTextInput from '../components/UI/MyTextInput/MyTextInput';
import color from '../constants/color';
import * as ScreenOrientation from 'expo-screen-orientation'


export const StartGameScreen = (props) => {
    const [number, setNumber] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [inputContainerWidth, setInputContainerWidth] = useState(Dimensions.get('window').width * .8)
    const [selectedNumber, setSelectedNumber] = useState('')



    useEffect(() => {
        const updateLayout = () => {
            setInputContainerWidth(Dimensions.get('window').width * .8)
        }
        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })
    const confirmButtonHandler = () => {
        if (number <= 0 || number > 99 || isNaN(number)) {
            Alert.alert('invalied number',
                'choose number between 1 and 99', [{ text: 'okey', style: 'destructive', onPress: setNumber('') }])
            return '';
        }
        setConfirmed(true)
    }

    const conformationHandler = () => {
        setSelectedNumber(+number)
        setConfirmed(false)
        setNumber('')
    }


    return (


        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>

            <ScrollView >

                <View style={styles.container}>
                    <Text style={styles.title}>Start a New Game!</Text>


                    <Card style={{ ...styles.inputContainer, width: inputContainerWidth }}>
                        <Text style={styles.inputText}>Choose an Number</Text>
                        <MyTextInput style={styles.textInput}
                            onChangeText={text => setNumber(text.replace(/[^0-9]/g, ''))}
                            value={number}
                        />
                        <HomeButtonContainer resetButton={() => setNumber('')}
                            confirmButton={confirmButtonHandler}
                            isNumberSelected={selectedNumber !== ''}
                        />
                    </Card>
                    <Confirm visible={confirmed}
                        onConfirm={conformationHandler}
                        onCancel={() => setConfirmed(false)}
                        title={`Are you sure to start game with ${number}?`}
                    />
                    {
                        selectedNumber !== '' && (
                            <DisplaySelectedNumber selectedNumber={selectedNumber}
                                onStartGame={() => props.onStartGame(selectedNumber)}
                            />
                        )
                    }
                </View>

            </ScrollView>

        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        width: '100%',
        flex : 1

    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        color: color.primary,
        textAlign: 'center'
    },
    textInput: {
        fontSize: 15,
        textAlign: 'center',
        width: 50,
    },
    inputText: {
        color: color.secondary,
        textAlign: 'center',
    },
    inputContainer: {

        alignItems: 'center',

    },

})