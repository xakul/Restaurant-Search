import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SearchBar = ( {term, onTermChange, onTermSubmit}) => {
    return <View style={styles.background}>
        <AntDesign name="search1" style = {styles.iconStyle} color="black" />
       <TextInput 
       autoCapitalize = 'none'
       autoCorrect={false}
       style={styles.inputStyle}
       placeholder = 'Search'
       value={term}
       onChangeText ={onTermChange}
       onEndEditing={onTermSubmit}
       
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor : '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection : 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize : 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
