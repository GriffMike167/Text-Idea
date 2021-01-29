import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';
// import ContactScreen from './screens/ContactsScreen';
// import { Logout } from "./components/Logout";
import Colors from "./constants/Colors" 
import ChatScreen from "./screens/ChatScreen";


// import { AuthProvider } from "./Providers/AuthProvider";
// import { TasksProvider } from "./providers/TasksProvider";




const Stack = createStackNavigator();

const App = () => {
  return (
    // <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#2a9df4'}, headerTintColor: Colors.light.background, 
      headerTitleStyle: {
      fontFamily: "AmericanTypewriter-Light",
      fontSize: 20,
      // fontWeight: "bold"
      // headerLeft: <Logout /> 
    }}}>
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{ title: "Messages" }}
          />
          <Stack.Screen
            name="ChatRoom"
            component={ChatRoomScreen}
            title="ChatRoom"
            headerBackTitle="log out"
            options={({route}) => ({ title: "Text"})} />
        
        
          {/* <Stack.Screen name="Contacts" component={ContactScreen}  /> */}
            
        </Stack.Navigator>
      </NavigationContainer>
    // </AuthProvider>
  );
};

export default App;