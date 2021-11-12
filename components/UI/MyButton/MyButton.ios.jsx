import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import color from "../../../constants/color";
import propTypes from 'prop-types';
import React from 'react';

function MyButton(props) {
   
    return (
        <TouchableOpacity style={{ ...props.style, ...styles.container }}
            onPress={props.onPress}
            activeOpacity={.8}

        >
            <View style={styles.container}>
                <Text style={{ ...styles.text, ...props.style2 }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.secondary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize : 16

    }
})

MyButton.propTypes = {
    onPress: propTypes.func.isRequired,

}

export default MyButton;