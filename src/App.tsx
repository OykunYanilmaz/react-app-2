import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  // return <TodoList />;
  return (
    // <>
    //   <TodoForm />
    //   <TodoList />
    // </>
    // <TaskList />
    // <LoginStatus />

    // <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
    //   <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
    //     <NavBar />
    //     <HomePage />
    //   </TasksContext.Provider>
    // </AuthContext.Provider>

    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
