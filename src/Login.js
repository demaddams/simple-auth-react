import React, {useState} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';

import * as resp from './data/apilogin.json';


export default Login = ({onLoginPress}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isLogged, setIsLogged] = useState(false);
const [message, setMessage] = useState('');

const _userLogin = () => { 
    setMessage('');
    setIsLogged(true)
    // fetch("...").then(function(data) {
    //     ...
    // });
    setTimeout(() => { 
        setIsLogged(false)
        if(resp.status.code === 200){
            onLoginPress()
            _storeUser(resp.data.user);
            console.log(resp.data.user)
        }else{
            setMessage('Login ou mot de passe incorrect');
        }
    }, 3000);
     
    

}

const _storeUser = async (user) =>{
    try {
        await AsyncStorage.setItem("user", JSON.stringify(user));
     } catch (error) {
       console.log("Something went wrong", error);
     }
}




    return (
        <>
            {isLogged && <ActivityIndicator />}
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' value={username} onChangeText={(v) => setUsername(v)} />
                <TextInput placeholder='Password' value={password} onChangeText={(v) => setPassword(v)}/>
                <View style={{margin:7}} />
                <Button 
                    disabled={!username||!password}
                          onPress={() => _userLogin()}
                          title="Submit"
                      />
                {!!message && (
                    <Text
                            style={{fontSize: 14, color: 'red', padding: 5}}>
                            {message}
                        </Text>
                    )}
            </ScrollView>
        </>
    )
};