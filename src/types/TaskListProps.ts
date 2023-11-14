export interface TaskProps {
  list_id: string;
  title: string;
  description: string;
  status: string;
  deleted: boolean;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface TaskListProps {
  tasks: TaskProps[];
}

export interface Task {
  title: string;
  description: string;
  status: string;
}
