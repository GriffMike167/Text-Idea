import React from 'react'
import { View, Text, Image } from 'react-native'
import ChatRooms from '../../data/ChatRooms';
import { ChatRoom } from "../../types";
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom;


}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    console.log(user.imageUri)
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.imageUri }} style={styles.userUri}/>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
}

export default ChatListItem