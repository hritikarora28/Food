import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
import ResultsList from './ResultList';

const ResultDetails = ({result}) => {
    return <View>
        <Text>{result.name}</Text>
    </View>
};


const styles = StyleSheet.create ({

})

export default ResultDetails