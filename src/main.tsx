import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Home } from './Components/Home'
import { Projects } from './Components/Projects'
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
