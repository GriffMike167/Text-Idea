import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../data/ChatRooms'
import ChatMessage from '../components/ChatMessage'
import { ChatRoom } from '../types';
// import InputBox from '../components/InputBox'


const ChatRoomScreen = () => {
    const route = useRoute();
    console.log(route.params)
    return (
        
        <><FlatList data={chatRoomData.message} renderItem={({ item }) => <ChatMessage message={item} />} inverted />
            </>
    )
}

export default ChatRoomScreen