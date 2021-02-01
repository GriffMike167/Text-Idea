import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View, Text } from '../components/Themed';
import  ChatListItem from '../components/ChatListItems'
import chatRooms from '../data/ChatRooms'
import NewMessageButton from '../components/NewMessageButton';
import contacts from '../data/Contacts';
import NewUserButton from '../components/NewUserButton';
import  ContactItem from '../components/ContactListItems'



export default function ContactScreen() {
    return (
        <View style={styles.container}>
          <FlatList data={contacts} renderItem={({ item }) =>
          <ContactItem contacts={item} />}
          keyExtractor={( item ) => item.id} />
          <NewUserButton />
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });