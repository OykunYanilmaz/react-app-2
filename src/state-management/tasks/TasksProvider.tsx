import { ReactNode, useReducer } from "react";
// import tasksReducer from "./tasksReducer";
// import TasksContext from "./contexts/tasksContext";
import TasksContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

// interface AddTask {
//     type: 'ADD';
//     task: Task;
// }

// interface DeleteTask {
//     type: 'DELETE';
//     taskId: number;
// }

//type TaskAction = AddTask | DeleteTask;

export type TaskAction =
  | { type: 'ADD'; task: Task }
  | { type: 'DELETE'; taskId: number };

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD':
            return [action.task, ...tasks];
        case 'DELETE':
            return tasks.filter(t => t.id !== action.taskId);
    }
}

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
