import _ from 'lodash';
import React from 'react'
import {
    Text,
    View,
} from 'react-native';
import SectionItem from './SectionItem';
import ItemCounter from './ItemCounter';

const Section = ({data, title}) => {
    const items = _.map(data, (el, key) =>
        <SectionItem
            key={key}
            value={el}
        />
    );
    return (
        <View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'lightgrey',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{fontWeight: 'bold', fontSize: 15}}>{title}</Text>
                <ItemCounter value={_.size(items)}/>
            </View>
            <View>
                {items}
            </View>
        </View>
    );
}

export default Section;
