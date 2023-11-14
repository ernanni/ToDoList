import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Task } from '../types/TaskListProps';

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
        placeholder="Digite a nova tarefa"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TextInput
        placeholder="Digite a descrição"
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

export default AddTask;
