import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar' ;
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const [searchApi,result, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return result.filter(result => {
            return result.price === price;
        })
    }
    return (
    <View>
        <SearchBar
         term={term}
         onTermChange={setTerm}
         onTermSubmit = {() => searchApi(term)}
         />
        <Text>We have found {result.length} results</Text>
        {errorMessage ? <Text> {errorMessage} </Text> :  null}
        <ResultsList
         title = "Cost Effective" 
         results={filterResultsByPrice('$')}
         navigation = {navigation}
         />
        <ResultsList
         title = "Bit Pricer"
          results={filterResultsByPrice('$$')}
          navigation = {navigation}
          />
        <ResultsList 
        title = "Big Spender" 
        results={filterResultsByPrice('$$$')}
        navigation = {navigation}
        />
    </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;