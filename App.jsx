import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ToDoForm from './ToDoForm'; // Adjust the import path as necessary

const App = () => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    // Function to add a new task
    const addTask = (taskText) => {
        setTasks([...tasks, taskText]); // Update the tasks array with the new task
    };

    return (
        <View style={{ padding: 20 }}>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} /> {/* Pass addTask as a prop */}
        </View>
    );
};

// ToDoList Component
function ToDoList({ tasks }) {
    return (
        <View style={{ marginVertical: 10 }}>
            {tasks.map((task, index) => (
                <Text key={index} style={{ textDecorationLine: 'none', marginVertical: 5 }}>
                    {task}
                </Text>
            ))}
        </View>
    );
}

export default App;
