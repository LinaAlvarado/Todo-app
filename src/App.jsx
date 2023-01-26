import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to gym",
    completed: false,
  },
  {
    id: 2,
    title: "Go to mall",
    completed: false,
  },
  {
    id: 3,
    title: "do the cake",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const totalTodosLeft = () => todos.filter((todo) => !todo.completed).length;

  const removeTodosCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  
  const [filter, setFilter] = useState("all");

  const changeFilter = (filter)=>{
    setFilter(filter);
  }

  const filterTodos = () => {
    switch (filter){
        case "all":
           return todos;
        case "active":
            return todos.filter((todo) =>!todo.completed);
        case "completed":
            return todos.filter((todo) => todo.completed);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
        <Header />
        <main className="container mx-auto mt-8 px-4">
          <TodoCreate createTodo={createTodo} />

          <TodoList
            todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />

          <TodoComputed
            totalTodosLeft={totalTodosLeft}
            removeTodosCompleted={removeTodosCompleted}
          />

          <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>
        <footer className="mt-8 text-center text-gray-400">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};
export default App;
