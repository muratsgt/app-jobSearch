import { StyleSheet, Dimensions } from 'react-native';

export const topicStyle = StyleSheet.create({
    container: {
        padding: 9,
        paddingHorizontal: 19,
        margin: 9,
        borderRadius: 9,
    },
    text: {
        fontSize: 40,
        color: '#fff',
        textAlign: "center"
    }

});

export const introStyle = StyleSheet.create({
    banner: {
        height: Dimensions.get('window').height * 0.3,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderBottomColor: "#999",
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    bannerText: {
        textAlign: "center",
        fontSize: 40,
        color: "black",
        fontFamily: "notoserif",
        fontWeight: "bold"
    }
});

export const jobStyle = StyleSheet.create({
    container: {
        padding: 19,
        margin: 9,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1
    },
    title: {
        fontSize: 23,
        fontWeight: "bold"
    },
    company: {
        fontStyle: "italic",
        fontSize: 19,
    },
    type: {
        fontSize: 19,
    }

})

export const jobsPageStyle = StyleSheet.create({
    modalBackground : {
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 9
    }
})