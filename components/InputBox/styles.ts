import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: 6,
        paddingLeft: 17,


    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 25,
        marginRight: 20,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        


    },
    textInput: {
        flex: 1,
        marginHorizontal: 15,
        alignContent: 'center',
        paddingBottom: 12,

    },
    icons: {
        marginHorizontal: 3,
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