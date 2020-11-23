import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {View, FlatList} from 'react-native';
import {JobItem} from '../components'

const SavedJobs = (props) => {
    const [jobList, setJobList] = useState([]);

    AsyncStorage.getItem("@SAVED_JOBS")
    .then(res => {
        const list = JSON.parse(res);
        setJobList(list);
    })

    return(
        <View style= {{flex:1}}>
            <FlatList
                data={jobList}
                keyExtractor = {(_,index) => index.toString()}
                renderItem = {({item}) => <JobItem item={item}/>}
            />
        </View>
    )
};

export {SavedJobs};