import React, { useState } from "react";
// import data from "./data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

//css
import "./App.css";

const App = () => {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      task: "Study HTML",
      complete: true,
    },
    {
      id: 2,
      task: "Study CSS",
      complete: false,
    },
    {
      id: 3,
      task: "Study JavaScript",
      complete: false,
    },
  ]);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App todo-style">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default App;
