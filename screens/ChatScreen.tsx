import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ChatRooms from'../data/ChatRooms';
import ChatListItem from "../components/ChatListItems";
import ChatList from "../components/ChatListItems";
import { useRoute } from "@react-navigation/native";
import NewMessageButton from "../components/NewMessageButton";

export default function ChatScreen() {
    const route = useRoute();
    console.log(route.params)
    return (
        <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });