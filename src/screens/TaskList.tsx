import React from 'react';
import { FlatList, Text, Button } from 'react-native';
import { TaskListProps } from '../types/TaskListProps';

const TaskList: React.FC<TaskListProps> = ({ tasks, navigation }) => {
  return (
    <>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.list_id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button
        title="Adicionar Tarefa"
        onPress={() => navigation.navigate('AddTask')}
      />
    </>
  );
};

export default TaskList;