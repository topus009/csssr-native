import React from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const SectionItem = ({searchText, handleChange}) =>
    <View style={{position: 'relative'}}>
        <Text style={{color: 'green'}}>Введите текст:</Text>
        <TextInput
            style={{borderWidth: 1, paddingHorizontal: 10}}
            onChangeText={handleChange}
            value={searchText}
        />
        <TouchableOpacity
            onPress={() => handleChange('')}
            style={{
                position: 'absolute',
                top: '49%',
                right: 10,
            }}
        >
            <Text>X</Text>
        </TouchableOpacity>
    </View>



export default SectionItem;
