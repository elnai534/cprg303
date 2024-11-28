import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

    return (
        <MainLayout>
            <View style={{ padding: 20 }}>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
                {/* Navigation Button to About Screen */}
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
}

export default HomeScreen;
