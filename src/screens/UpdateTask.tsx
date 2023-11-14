import { View, TextInput, Button } from 'react-native';
import { Task } from '../types/globalInterfaces';
import { useState } from 'react';

interface UpdateTaslProps {
  onUpdateTask: (task: Task) => void;
}

const AddTask: React.FC<UpdateTaslProps> = ({ onUpdateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View>
      <TextInput
        value={title}
        onChange={() => setTitle}
        placeholder="Título"
      ></TextInput>
      <TextInput
        value={description}
        onChange={() => setDescription}
        placeholder="Descrição"
      ></TextInput>
      <Button title="Salvar" onPress={onUpdateTask} />
      <Button title="Cancelar" onPress={() => {}} />
    </View>
  );
};
