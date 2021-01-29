import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import ChatRooms from '../../data/ChatRooms';
import { ChatRoom } from "../../types";
import styles from './style';
import moment from 'moment'
export type ChatListItemProps = {
    chatRoom: ChatRoom;


}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const onClick = () => {
        console.warn(`Clicked on ${user.name}`)

    }
    const user = chatRoom.users[1];
    console.log(user.imageUri)
    return (
       <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <Image source={{ uri: user.imageUri }} style={styles.userUri}/>
            <View style={styles.middleContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).startOf('hour').fromNow()}

            </Text>
        </View>
       </TouchableWithoutFeedback>
    )
}

export default ChatListItem