import React from 'react';
import { FlatList } from 'react-native';
import { TaskList, Task } from '../types/globalInterfaces';
import ListItem from '../components/ListItem';

interface TaskListProps {
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({
  onUpdateTask,
  onDeleteTask,
  tasks,
}) => {
  return (
    <FlatList
      data={tasks.filter((item) => item.deleted === false)}
      keyExtractor={(item) => item.list_id.toString()}
      renderItem={({ item }) => (
        <ListItem
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          task={item}
        />
      )}
    />
  );
};

export default TaskList;
