import React from 'react'
import {
    Text,
    View,
} from 'react-native';

const ItemCounter = ({value}) =>
    <View style={{width: 20}}>
        <Text style={{color: 'blue', textAlign: 'left'}}>{value}</Text>
    </View>



export default ItemCounter;
