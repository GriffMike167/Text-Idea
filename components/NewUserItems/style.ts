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
        padding: 7, 
        backgroundColor: 'white',
        color: 'white',
        justifyContent: 'space-around',

      
        
    
    },
    leftContainer: {
        flexDirection: 'row',
        width: '100%',
        color: 'grey'

    },
    middleContainer: {
        paddingTop: 30,
        width: '100%',
        padding: 7,
        backgroundColor: 'white',
        color: 'white',
        justifyContent: 'space-around',

       
       
     
    },
  
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#696969'
    },
    content: {
        fontWeight: 'normal',
        fontSize: 20
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
    time: {
        color: '#696969',
        fontSize: 9,
    },
    lastMessage: {
        color: '#696969'
    }

})

export default styles