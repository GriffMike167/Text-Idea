import React, { useState } from 'react';
import { View, Text, ImagePropTypes, TextInput } from 'react-native';
import styles from './styles';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const InputBox = () => {
    const [message, setMessage] = useState('')

    const onMicrophonePress = () => {
        console.warn('Microphone Pressed')
    }
    const onSendPress = () => {
        console.warn(`Send: ${message}`)
        setMessage('')
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress ();
        } else { 
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainerTwo}>
                <FontAwesome5 name="laugh-beam" size={24} color='grey' />
                </View>
            <View style={styles.mainContainer}>
                <TextInput placeholder={'polyMessage'} style={styles.textInput} multiline 
                     value={message} onChangeText={setMessage} /> 
               {!message && <Entypo name='attachment' size={22} color='grey'style={styles.icons} />}
                {!message && <MaterialCommunityIcons name='microphone' size={24} color='grey' style={styles.icons} />}
            </View>
            <TouchableOpacity>
            <View style={styles.buttonContainer}>
                {!message ? <MaterialCommunityIcons name="camera" size={22} color='grey' />
                : <MaterialCommunityIcons name="send" size={25} color='grey' />}
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox