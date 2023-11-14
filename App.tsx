import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from './src/screens/TaskList';
import AddTask from './src/screens/AddTask';
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from './src/services/tasks';
import { Task } from './src/types/globalInterfaces';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  const handleUpdateTask = async (task: Task) => {
    const updatedTask = task && (await updateTask(task.list_id));
    tasks.map((item) => (item.list_id === task.list_id ? task : item));
  };

  const handleDeleteTask = async (task: Task) => {
    await deleteTask(task).then(() => {
      alert('Tarefa Excluída');
    });
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
      <Text style={styles.Title}>Minhas Tarefas</Text>
      <View style={styles.TaskListContainer}>
        <TaskList
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          tasks={tasks}
        />
      </View>
      <View style={styles.AddTaskContainer}>
        <AddTask onAddTask={handleAddTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 48,
    fontWeight: '800',
  },
  TaskListContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
  },
  AddTaskContainer: {
    padding: 16,
    flex: 1,
  },
});

export default App;
