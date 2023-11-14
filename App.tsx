import React, { useEffect, useState } from 'react';
import TaskList from './src/screens/TaskList';
import AddTask from './src/screens/AddTask';
import { getTasks, addTask } from './src/services/tasks';
import { Task, TaskProps, TaskListProps } from './src/types/TaskListProps';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  TaskList: undefined;
  AddTask: undefined;
};

type TaskListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TaskList'
>;

interface TaskListProps {
  navigation: TaskListScreenNavigationProp;
}

const RootStack = createStackNavigator<RootStackParamList>();

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
    <RootStack.Navigator initialRouteName="TaskList">
      <RootStack.Screen name="TaskList" component={TaskList} />
      <RootStack.Screen
        name="AddTask"
        component={AddTask}
        options={{ onAddTask: { handleAddTask } }}
      />
    </RootStack.Navigator>
  );
};
/*
    <View>
      <Text>Minhas Tarefas</Text>
      <TaskList tasks={tasks} />
      <AddTask onAddTask={handleAddTask} />
    </View>
    */
export default App;
