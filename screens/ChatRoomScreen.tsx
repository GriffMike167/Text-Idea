import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage'
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {

    
    const route = useRoute();
    console.warn(route.params)

    return (
       
       <><><FlatList data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />} />
         </>
            <InputBox /></>
            
    )
}
        // inverted

export default ChatRoomScreen

