import React from 'react';
import { View , StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const Card =props => {

    return ( 
        <View style={{...styles.card , ...props.style}}>
            {
                props.children
            }
        </View>
     );
}

const styles = StyleSheet.create({
    card : {
        shadowOffset : {
            width : 0 ,
            height : .26
        },
        shadowColor : '#ccc',
        backgroundColor : 'white',
        shadowRadius : 6 ,
        elevation : 8,
        borderRadius : 6,
        marginVertical: 10,
        padding : 5,
    }
})


export default Card;