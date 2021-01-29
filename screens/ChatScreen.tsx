import * as React from "react";
import { View, Text, FlatList } from "react-native";
import ChatRooms from'../data/ChatRooms';
import ChatListItem from "../components/ChatListItems";
import ChatList from "../components/ChatListItems";
import { useRoute } from "@react-navigation/native";
import NewMessageButton from "../components/NewMessageButton";

export default function ChatScreen() {
    const route = useRoute();
    console.log(route.params)
    return (
        <View><FlatList data={ChatRooms} renderItem={({ item }) => <ChatListItem chatRoom={item}/>}/>
        <NewMessageButton />
        </View>
    )
}