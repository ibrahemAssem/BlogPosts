import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const showScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(Context)
    const blogPost = state.find(blogPost => blogPost.id ===  navigation.getParam('id'))

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
};


showScreen.navigationOptions = ({ navigation }) => {
    return {

        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id : navigation.getParam('id') })}>
            <EvilIcons name="pencil" size={35} style={{ marginRight: 10 }} />
        </TouchableOpacity>
    }

}
const styles = StyleSheet.create({

})

export default showScreen;