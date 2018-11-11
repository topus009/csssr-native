import React from 'react'
import {
    Text,
    View,
} from 'react-native';

const SectionItem = ({value: {title}}) =>
    <View>
        <Text style={{color: 'red'}}>{title}</Text>
    </View>



export default SectionItem;
