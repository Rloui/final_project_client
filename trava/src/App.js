import React from 'react'
import Login from './components/Login'
import Register from './components/Register'

let BASE_URL = ''
BASE_URL = 'http://localhost:8000'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {
        username: '',
        email: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({username: e.target.username})
  }


  render() {
    return (
    <div className='container'>
      <Login baseURL={BASE_URL}/>
      <Register baseURL={BASE_URL}/>
    </div>
    )
  }
}

export default App