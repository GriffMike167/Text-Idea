import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View, Text } from '../components/Themed';
import  ChatListItems from '../components/ChatListItems'
import ChatListItem from '../components/ChatListItems';
import chatRooms from '../data/ChatRooms'


export default function ChatScreen() {
    return (
        <View style={styles.container}>
          <FlatList data={chatRooms} renderItem={({ item }) =>
          <ChatListItem chatRoom={item} />}
          keyExtractor={( item ) => item.id} />
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });