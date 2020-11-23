import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {topicStyle} from '../styles';

const TopicItem = (props) => {
    return(
        <TouchableOpacity
            style={[topicStyle.container, {backgroundColor: `#${props.item.color}`}]}
            onPress={() => props.onSelect(props.item.name)}
        >
            <Text style={topicStyle.text}>{props.item.name}</Text>
        </TouchableOpacity>
    )
};

export {TopicItem};