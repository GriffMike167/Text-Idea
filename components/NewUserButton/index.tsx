import React from 'react';
import {TouchableOpacity, View} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

const NewUserButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AddUser');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Entypo
          name="add-user"
          size={28}
          color="white"
        />
      </TouchableOpacity>
    </View>
  )
}

export default NewUserButton;