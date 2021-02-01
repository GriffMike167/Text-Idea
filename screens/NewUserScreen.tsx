import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";






export default function NewUserScreen() {
  const [value, onChangeText] = useState('')
    return [
      <TextInput
     style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
     onChangeText={ text => onChangeText(text)}
     value={value}
      />,
   
    ];
  }
