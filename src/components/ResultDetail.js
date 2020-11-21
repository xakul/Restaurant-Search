import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


const ResultsDetail = ( {result}) => {
    return (
        <View style={styles.container}>
            <Image style = {styles.image} source ={{uri : result.image_url }}/>
            <Text> {result.name} </Text>
            <Text> {result.rating} Starts, {result.review_count} Reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
       image : {
           width: 250,
           borderRadius: 4,
           height: 120
       }
});

export default ResultsDetail;