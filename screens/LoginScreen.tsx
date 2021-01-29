import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';



export default function LoginScreen() {
  return (

    <ImageBackground style={styles.image} source={require("../assets/images/386860.jpg")}>
      {/* <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/images/11.jpg")} />
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View> */}
      </ImageBackground>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab Two</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex:1,
    resizeMode: 'cover',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
