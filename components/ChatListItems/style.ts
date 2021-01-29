import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    userUri: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 7
    
    },
    leftContainer: {
        flexDirection: 'row',
        width: '100%'

    },
    middleContainer: {
        justifyContent: 'space-around'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'American Typewritter"'
    },
    content: {
        fontWeight: 'normal',
        fontSize: 16
    },
    loadingcomponent: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'grey',
        opacity: 0.7,
        zIndex: 300

    },

})

export default styles