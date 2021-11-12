// @flow
import * as React from 'react';
import { Button, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Card from '../components/UI/Card/Card';
import color from '../constants/color';
import Photo from '../assets/right.png';


export function GameOverScreen(props) {

    const { expectedNumber, numberOfRounds, newGame } = props

    return (
        <ScrollView scrollEnabled={true}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>The Game Over!</Text>
                    <View style={styles.imageContainer} >
                        <Image source={Photo}
                            resizeMode="cover"
                            fadeDuration={3000}
                        />
                    </View>
                    <Text> with expected number <Text style={styles.number}>{expectedNumber}</Text></Text>
                    <Text>with number of rounds  <Text style={styles.number}>{numberOfRounds}</Text></Text>
                    <View style={styles.buttonContainer}>
                        <Button title="New Game!" color={color.secondary}
                            onPress={newGame}
                        />
                    </View>
                </Card>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       

    },
    card: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin : 5

    },
    buttonContainer: {

        marginVertical: 10 ,
        marginHorizontal : 20
    },
    number: {
        color: color.secondary,
        fontWeight: 'bold'
    },
    imageContainer : {

    }

})