import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";



function App() {
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false,
  });

  const [todos, setTodos] = useState([]);

  function addTodos(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false,
      },
    ]);

    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false,
    });
  }

  // id: 0,
  //   taskDescription: "",
  //   isCompleted: false,

  function handleCompleteButton(id) {
    const mapped = todos.map((task) => {
      return task.id === Number(id)
        ? {
            ...task,
            isCompleted: true,
          }
        : { ...task };
    });

    setTodos(mapped);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={addTodos}>
        <div>
          <label>
            Task
            <input
              type="text"
              name="taskDescription"
              onChange={(event) =>
                setTask({
                  taskDescription: event.target.value,
                  isCompleted: false,
                })
              }
            />
          </label>
          <button>Add Todo</button>
        </div>
      </form>

      {todos.map((todo, index) => {
        return (
          <div>
            <div key={todo.id + index}>
              {todo.isCompleted ? (
                <strike>{todo.taskDescription}</strike>
              ) : (
                <p>{todo.taskDescription}</p>
              )}
            </div>
            <button onClick={() => handleCompleteButton(todo.id)}>
              Complete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
