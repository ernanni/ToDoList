import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Task } from '../types/globalInterfaces';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    onAddTask({
      title: taskTitle,
      description: taskDescription,
      status: 'PENDENTE',
    });
  };

  return (
    <View>
      <TextInput
        style={styles.TextField}
        placeholder="Digite a nova tarefa"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TextInput
        style={styles.TextField}
        placeholder="Digite a descrição"
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TextField: {
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 2,
    padding: 4,
    marginBottom: 16,
  },
});

export default AddTask;
