import './App.css'
import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
