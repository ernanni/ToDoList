export interface Task {
  list_id?: string;
  title: string;
  description: string;
  status: string;
  deleted?: boolean;
}

export interface TaskList {
  tasks: Task[];
}
