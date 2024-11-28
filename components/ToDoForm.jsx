import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
 
  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
      
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update taskText as the user types
        value={taskText} // Controlled input value
      />
      
      <Button
        title="Add Task"
        onPress={() => {
          if (taskText.trim()) { // Ensure the task is not empty
            addTask(taskText); // Call addTask with the current taskText
            setTaskText(''); // Clear the input field
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
    padding: 5,
  },
});

export default ToDoForm;
