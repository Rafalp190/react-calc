import React from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../style/exampleStyle.scss'
const App = () => (
  <div className="app">
    <div className="description">
    <img className="logo" src={require('../images/rocket.png')} />
      <h1>react-boilerplate example app</h1>
      <div className="project-description">
        <p>This is the example app for react-boilerplate. It is a working todo list taken from the <a href="https://redux.js.org/basics/exampletodolist">Redux.js documentation.</a>
          This example app showcases a basic redux implementation for react. As well as a couple of extras implemented by me. Such as:</p>
         <ul>
          <li>Style Loading with webpack sass-loader</li>
          <li>Image loading with file-loader</li>
          <li>Testing with chai-enzyme</li>
          <li>Linting with eslint</li>
        </ul> 
        <p>Here you can test the app to add Todos to a todo list:</p>
      </div>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <p>Find out more about the project on the official documentation.</p>
    <a href="https://github.com/Rafalp190/react-boilerplate" className="footerLinks"><img src={require('../images/github.png')} />react-boilerplate github </a>
  </div>
)

export default App