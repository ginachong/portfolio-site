import React from 'react';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <NavBar {...props}></NavBar>
      <Switch>
        <Route exact path='/'         render={() => <Home/>}/>
        <Route       path='/about'    render={() => <About/>}/>
        <Route       path='/projects' render={() => <Projects/>}/>
        <Route       path='/resume'   render={() => <Resume/>}/>
        <Route       path='/contact'  render={() => <Contact/>}/>
      </Switch>
    </div>
  )
}

export default App;
