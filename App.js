import { View, Text } from 'react-native';
import React, { useState } from 'react';

const App = () => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <View>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </View>
    );
};

function ToDoList({ tasks }) {
    return (
        <View>
            {tasks.map((task, index) => (
                <Text key={index} style={{ textDecorationLine: 'none' }}>{task}</Text>
            ))}
        </View>
    );
}

export default App;
