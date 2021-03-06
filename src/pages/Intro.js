import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { TopicItem } from '../components'
import {introStyle} from '../styles'


const topics = [
    {
        id: 0,
        name: 'Java',
        color: 'fb5607'
    },
    {
        id: 1,
        name: 'Python',
        color: '007f5f'
    },
    {
        id: 2,
        name: 'Javascript',
        color: 'ffb703'
    },
    {
        id: 3,
        name: '.NET',
        color: '023e7d'
    },
    {
        id: 4,
        name: 'Dart',
        color: '001845'
    },
    {
        id: 5,
        name: 'Python',
        color: 'f8961e'
    },
    {
        id: 6,
        name: 'Ruby',
        color: 'e63946'
    },
    {
        id: 7,
        name: 'C',
        color: 'fb8b24'
    },
    {
        id: 8,
        name: 'C++',
        color: '06d6a0'
    }
];

const Intro = (props) => {


    const selectTopic = (lang) => {
        props.navigation.navigate("Jobs", {selectedLang: lang});
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={introStyle.banner}>
                    <Text style={introStyle.bannerText}>Choose your language..</Text>
                </View>
                <ScrollView
                    style={{ flex: 1 }}
                    
                >
                    {
                        topics.map(t => <TopicItem key={t.id} item={t} onSelect={selectTopic} />)
                    }
                </ScrollView>
            </View>
        </View>
    )
};

export { Intro };