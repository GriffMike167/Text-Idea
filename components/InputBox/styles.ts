import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
        paddingLeft: 15,
        justifyContent: 'space-between',


    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        paddingBottom: 5,
        borderRadius: 25,
        marginRight: 20,
        flex: 1,
        alignItems: 'flex-end',
        paddingLeft: 15,
        justifyContent: 'space-between',


    },
    textInput: {
        flex: 1,
        marginHorizontal: 15,
        alignContent: 'center',
        paddingBottom: 5,

    },
    icons: {
        marginHorizontal: 5,
        justifyContent: 'space-between',

    },
    
    buttonContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 33,
        height: 33,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 6,
    },
    buttonContainerTwo: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 37,
        height: 37,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 6,
    }

})

export default styles