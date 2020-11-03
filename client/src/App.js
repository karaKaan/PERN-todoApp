import React, { Fragment } from 'react'

import './App.css';

import InputTodo from "./components/InputTodo"
import ListTodos from "./components/ListTodos"

export default function App() {
  return (
    <Fragment>
      <div className="container">

         <InputTodo />
         <ListTodos />
      </div>
    </Fragment>
  );
}
