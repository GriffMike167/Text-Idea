import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, Message, User } from '../../types'
import styles from './style'
import moment from 'moment'


export type ChatListItemsProps = {
    chatRoom: ChatRoom;
    message: Message;
    user: User
}
const ChatListItem = () => {
    const { chatRoom } = props
    const navigation = useNavigation();
    const user = chatRoom.users[1];
    console.log(user.imageUri)
    const onClick = () => {
        navigation.navigate('ChatRoom', {id: chatRoom.id, name: user.name})
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.userUri} />
            <View style={styles.middleContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.content}>{chatRoom.lastMessage.content}
            </Text>
        </View>
        {/* <Text>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYY")}</Text> */}
            <Text>Yesterday</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatListItem