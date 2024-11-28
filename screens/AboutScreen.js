import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
    const currentDate = new Date().toLocaleDateString();

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.title}>CPRG303</Text>
                <Text style={styles.text}>Incredible To Do List</Text>
                <Text style={styles.text}>Developer: Elina Chin</Text>
                {/* Navigation Button to Home Screen */}
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default AboutScreen;
