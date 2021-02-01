import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import Contacts from '../../data/Contacts';
import { ChatRoom, User } from "../../types";
import styles from './style';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';
export type ContactsItemProps = {
    contacts: User;


}

const ContactsItem = (props: ContactsItemProps) => {
    const { contacts } = props;

    const navigation = useNavigation()
    const user = contacts;
    console.log(user.imageUri);




    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: contacts.id,
            name: user.name,
        })
        console.warn(`Clicked on ${user.name}`)
        navigation.navigate('ChatRoom', { id: user.name })
        console.log(contacts.id)

    }

    return (
       <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <Image source={{ uri: user.imageUri }} style={styles.userUri}/>
            <View style={styles.middleContainer}>
                <Text style={styles.username}>{contacts.name}</Text>
                <Text style={styles.lastMessage}>{contacts.fb}                   {contacts.insta}</Text>
                {/* <Text style={styles.leftContainer}>{contacts.insta}</Text> */}

                </View>
            <Text style={styles.time}>
                {moment().startOf('hour').fromNow()}

            </Text>
            

        </View>
       </TouchableWithoutFeedback>
    )
}

export default ContactsItem