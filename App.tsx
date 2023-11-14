import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import TaskList from './src/screens/TaskList';
import AddTask from './src/screens/AddTask';
import { getTasks, addTask } from './src/services/tasks';
import { Task, TaskProps } from './src/types/TaskListProps';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (task: Task) => {
    const newTask = await addTask(task);
    setTasks([...tasks, newTask]);
    console.log('handleAddTask', tasks);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 32,
        paddingBottom: 32,
        justifyContent: 'center',
      }}
    >
      <Text>Minhas Tarefas</Text>
      <TaskList tasks={tasks} />
      <AddTask onAddTask={handleAddTask} />
    </View>
  );
};

export default App;
