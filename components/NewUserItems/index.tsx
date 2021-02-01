import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { ChatRoom, User } from "../../types";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

// export type NewUserItemProps = {
//     newuser: User;


// }

const NewUserItem = () => {
    const [value, onChangeText] = useState('')

  const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Camera');
      }
    

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        style={{width: '100%'}}
      >
          <TouchableOpacity onPress={onPress}>
        <><View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Entypo
                    name="user"
                    size={80}
                    color="grey" placeholder="user image"/>
            </TouchableOpacity>
        </View><><View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder='Name' />

        </View><View style={styles.container}>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder='User Name' />

                </View>
                <View style={styles.container}>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder='User Image' />
                </View></>
            <View style={styles.middleContainer}>
            <TextInput
                        style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder='Add Phone Number' />

            </View>
             <View style={styles.middleContainer}>
             <TextInput
                         style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                         onChangeText={text => onChangeText(text)}
                         value={value}
                         placeholder='Add Email Number' />
 
             </View>
              <View style={styles.middleContainer}>
              <TextInput
                          style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                          onChangeText={text => onChangeText(text)}
                          value={value}
                          placeholder='Add Language' />
  
              </View>
              <View style={styles.middleContainer}>
              <TextInput
                          style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                          onChangeText={text => onChangeText(text)}
                          value={value}
                          placeholder='Add Facebook Name' />
  
              </View>
              <View style={styles.middleContainer}>
              <TextInput
                          style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
                          onChangeText={text => onChangeText(text)}
                          value={value}
                          placeholder='Add Instagram Name' />
  
              </View></>
              </TouchableOpacity>
              </KeyboardAvoidingView>

              
       
       
    );
}

export default NewUserItem