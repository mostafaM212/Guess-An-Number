import React from 'react';
import { Modal, View, StyleSheet, Button, Text } from "react-native";
import color from "../../constants/color";
import Card from "../UI/Card/Card";
import propTypes from 'prop-types';


function Confirm(props) {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="cancel"
                            color={color.primary}
                            onPress={props.onCancel}
                        />
                        <Button title="confirm"
                            color={color.secondary}
                            onPress={props.onConfirm}
                        />

                    </View>
                </Card>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        
    },
    card: {
        width: '80%',
        height: 150,
        justifyContent: 'space-around'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    title: {
        textAlign: 'center',
        fontSize : 20
    }
});

Confirm.propTypes = {
    visible: propTypes.bool.isRequired,
    onCancel: propTypes.func.isRequired,
    onConfirm: propTypes.func.isRequired,
    title: propTypes.string.isRequired
}
export default Confirm;