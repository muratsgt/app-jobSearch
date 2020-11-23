import axios from 'axios';
import Modal from 'react-native-modal';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

import { JobItem } from '../components'
import { jobsPageStyle } from '../styles'


const Jobs = (props) => {
    const {selectedLang} = props.route.params;
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedJob, setSelectedJob] = useState({});

    const fetchData = async () => {
        const response = await axios.get(`https://jobs.github.com/positions.json?search=${selectedLang.toLowerCase()}`);
        setData(response.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    const openDetail = (item) => {
        setSelectedJob(item);
        setModalVisible(true);
    }

    const renderJob = ({ item }) => {
        return (
            <JobItem item={item} onSelect={openDetail} />
        )
    }

    const saveJob = async () => {
        let savedJobList = await AsyncStorage.getItem("@SAVED_JOBS");
        savedJobList = JSON.parse(savedJobList) ?? [];

        const updatedJobList = [...savedJobList, selectedJob];
        AsyncStorage.setItem("@SAVED_JOBS", JSON.stringify(updatedJobList));
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: 'navy', textAlign: "center", margin: 15 }}
            >JOBS FOR {selectedLang.toUpperCase()}</Text>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderJob}
            />

            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue", 
                    padding: 10, 
                    borderRadius: 10,
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                }}
                onPress={() => props.navigation.navigate("SavedJobs")}
            >
                <Text>See Saved Jobs</Text>
            </TouchableOpacity>

            <Modal isVisible={modalVisible} onBackdropPress={()=>setModalVisible(false)}>
                <View style={jobsPageStyle.modalBackground}>
                    <View style={{padding: 10}}>
                        <Text>{selectedJob.title}</Text>
                        <Text>{selectedJob.type} / {selectedJob.location}</Text>
                        <Text>{selectedJob.company}</Text>
                    </View>
                    <Text numberOfLines={5}>{selectedJob.description}</Text>
                    <Button title="Save" onPress={saveJob}/>
                </View>
            </Modal>
        </View>
    )
};

export { Jobs };