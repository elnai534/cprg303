import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Welcome the Incredible To Do List</Text>
        </View>
    );
};


const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>incredible to do list</Text>
        </View>
    );
};


const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {children}
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        padding: 15,
        backgroundColor: '#007bff',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    footer: {
        padding: 10,
        backgroundColor: '#343a40',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#fff',
    },
});


export default MainLayout;
