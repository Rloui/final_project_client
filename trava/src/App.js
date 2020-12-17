import React from 'react'
import Login from './components/Login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // username: '',
      // password: '',
      // email: ''
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
      <Login />
    </div>
    )
  }
}

export default App