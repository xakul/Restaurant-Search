import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from '../components/ResultDetail';

const ResultsList = ({title , results, navigation}) => {
    return(
    <View> 
      <Text style={styles.title}> {title } </Text> 
      <FlatList
      showsHorizontalScrollIndicator={false}
       horizontal
       data = {results}
       keyExtractor = {(result) => result.id }
       renderItem = {({item}) => {
           return (
               <TouchableOpacity 
               onPress={() => navigation.navigate('ResultShowScreen', {id : item.id})}
               >
                <ResultsDetail result= {item}/>
               </TouchableOpacity>
           );
       } }
      />
    </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize : 18,
        fontWeight : 'bold'
    }
});

export default ResultsList;