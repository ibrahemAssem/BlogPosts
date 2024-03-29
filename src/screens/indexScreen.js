import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context, } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const indexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts();

        const listner = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        
        // a return function in useEffect will only called once the page is tottaly destroyed and will not be visible again!!
        return () => {
           listner.remove();
        }
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

indexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} style={{ marginRight: 10 }} />
        </TouchableOpacity>
    };
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,

        borderColor: 'gray'
    },
    title: {
        fontSize: 18,

    },
    icon: {
        fontSize: 24
    }
})

export default indexScreen; 