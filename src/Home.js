import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default Home = ({onLogoutPress}) => {
    return (
        <>
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <View style={{margin:20}} />
                <Button
                            onPress={onLogoutPress}
                            title="Logout"
                        />
            </ScrollView>
        </>
    )
};