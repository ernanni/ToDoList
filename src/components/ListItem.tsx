import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Task } from '../types/globalInterfaces';

interface CardItemProps {
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
  task: Task;
}

export default function ListItem({
  onUpdateTask,
  onDeleteTask,
  task,
}: CardItemProps) {
  return (
    <View style={styles.CardContainer}>
      <Text style={styles.Title}>{task.title}</Text>
      <View style={styles.ButtonsContainer}>
        <TouchableHighlight
          onPress={() => onUpdateTask(task)}
          style={styles.Button}
        >
          <Text style={styles.TextButtonEdit}>Editar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => onDeleteTask(task)}
          style={styles.Button}
        >
          <Text style={styles.TextButtonDelete}>Excluir</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: 5,
    borderWidth: 3,
    margin: 5,
    padding: 5,
    height: 48,
    borderColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    flex: 1,
  },
  Title: {
    fontWeight: '600',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 7,
    width: '30%',
  },
  Button: {
    marginLeft: 4,
  },
  TextButtonEdit: {
    backgroundColor: '#61AFFE',
    color: '#fff',
    marginRight: 4,
    padding: 4,
  },
  TextButtonDelete: {
    backgroundColor: '#F93E3E',
    color: '#fff',
    marginRight: 8,
    padding: 4,
  },
});
