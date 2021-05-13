import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native'
import ResultDetails from './ResultDeatils'

const ResultsList = ({title,results}) => {
    //console.log(results.length)
    return(
    <View style={styles.container}>
       
       <Text style={styles.titleStyle}> {title}</Text>
       
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data= {results}
        keyExtractor={(result) => result.id}
        renderItem={({item})=>{
            return <ResultDetails result={item}/>
        }}
       />


    </View>
    )};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,

    },
    container: {
        marginBottom:10
    }
});

export default ResultsList;