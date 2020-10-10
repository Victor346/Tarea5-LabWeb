import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './components/todo/Create';
import TodoList from './components/todo/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/tasks`, { headers: {Accept: 'aplication/json'}})
      .then((function (response) {
        setTodos(response.data);
      }))
  }, []);

  const addTodo = (description) => {
    
    axios.post(`http://localhost:3000/tasks`, { description } ,{ headers: {Accept: 'aplication/json'}})
    .then((function (response) {
      let cTodos = Object.assign([], todos);
      cTodos.push({ description: description, status: 'pending', id: response.data.id });
      setTodos(cTodos);
    }))
    .catch((error) => {
      alert('An error ocurred while storing the task')
    });
    
    
  }

  const markAsDone = (taskIndex) => {
    let cTodos = Object.assign([], todos);
    let taskData = cTodos[taskIndex];
    axios.post(`http://localhost:3000/update`, { id: taskData.id } ,{ headers: {Accept: 'aplication/json'}})
    .then((function (response) {
      let cTodos = Object.assign([], todos);
      cTodos[taskIndex].status = 'done';
      setTodos(cTodos);
    }))
    .catch((error) => {
      alert('An error ocurred while updating the task')
    });
    
  }

  const deleteTask = (taskIndex) => {
    let cTodos = Object.assign([], todos);
    let taskData = cTodos[taskIndex];
    axios.post(`http://localhost:3000/delete`, { id: taskData.id } ,{ headers: {Accept: 'aplication/json'}})
    .then((function (response) {
      let cTodos = Object.assign([], todos);
      cTodos.splice(taskIndex, 1);
      setTodos(cTodos);
    }))
    .catch((error) => {
      alert('An error ocurred while updating the task')
    });
  }

  return (
    <>
      <h1>Todo list</h1>
      <Create addTodo={addTodo}/>
      <TodoList todos={todos} markAsDone={markAsDone} deleteTask={deleteTask}/>
    </>
  );
}

export default App;
