// @flow
import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import color from '../../constants/color';
import propsTypes from 'prop-types';

const HomeButtonContainer = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Reset"
                    color={color.primary}
                    onPress={props.resetButton}
                    disabled={props.isNumberSelected}
                />
            </View>
            <View style={styles.button}>
                <Button title="Confirm"
                    color={color.secondary}
                    onPress={props.confirmButton}
                    disabled={props.isNumberSelected}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
        width: '100%' ,
        minWidth: '80%'
    },
    button: {
        width: 100,
        maxWidth : '40%'

    }
})
HomeButtonContainer.propTypes = {
    resetButton : propsTypes.func.isRequired ,
    confirmButton : propsTypes.func.isRequired
}
export default HomeButtonContainer;