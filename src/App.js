/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (title, Completed) => {
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      body: JSON.stringify({
        title: title,
        completed: Completed
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos((todos) => [...todos, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((userId) => {
              return userId !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const onEdit = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((userId) => {
              return userId !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onUpdate = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((userId) => {
              return userId !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {todos.map((userId) => (
          <User
            id={userId}
            key={userId}
            title={userId.title}
            completed ={userId.completed}
            onDelete={onDelete}
            onEdit ={onEdit}
            onUpdate = {onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
