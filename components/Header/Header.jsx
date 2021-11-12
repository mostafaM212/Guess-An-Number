// @flow  Header Component
import  React  from 'react';
import { View , Text , StyleSheet , Platform} from 'react-native';
import propTypes from 'prop-types'
import color from '../../constants/color';

const Header = (props) => {
    return (
        <View style={{...styles.Basecontainer , ...Platform.select({ios : styles.containerIOS , android : styles.containerAndroid})}}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

Header.propTypes = {
    title : propTypes.string.isRequired
}

const styles = StyleSheet.create({
    Basecontainer : {
        width : '100%',
        height: 90,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    containerIOS : {
        borderBottomColor :'#ccc' ,
        borderBottomWidth :  2,

        backgroundColor: 'white' ,


    },
    containerAndroid : {
        backgroundColor:  color.secondary,
        borderBottomWidth : 0,
        borderBottomColor :  'white',

    },
    text : {
        color : Platform.OS === 'ios' ? color.secondary : 'white',
        fontSize: 18,
        fontWeight : 'bold',
        paddingTop : 15,
        
    }
});

export default Header ;