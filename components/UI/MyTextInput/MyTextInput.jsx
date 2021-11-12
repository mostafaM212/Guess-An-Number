import React from 'react';
import { TextInput , StyleSheet } from 'react-native'



function MyTextInput(props) {
    return ( 
        <TextInput  {...props} 
                    style={{...styles.input , ...props.style}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    blurOnSubmit
                    
                    />
     );
}

const styles = StyleSheet.create({
    input : {
        borderBottomColor : '#ccc',
        borderBottomWidth : 2 ,
        height : 50 ,
        marginVertical : 5 ,
        padding : 5
    }
})

export default MyTextInput;