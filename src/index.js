import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './example/reducers'
import App from './example/components/App.jsx'

const store = createStore(rootReducer)

const Root = document.createElement('div', {id: 'root'})
document.body.appendChild(Root)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  Root
)
