import React, { Fragment } from 'react'

import './App.css';

import InputTodo from "./components/InputTodo"

export default function App() {
  return (
    <Fragment>
      <div className="container">

         <InputTodo />
      </div>
    </Fragment>
  );
}
