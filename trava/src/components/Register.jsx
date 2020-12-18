import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            searchURL: ''
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        return (
            <div>
                This is the Register Page
                <form onSubmit={this.handleSubmit}>
                    {/* <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='username' value={this.state.username} onChange={this.handleChange} id='username'/>
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='password' value={this.state.password} onChange={this.handleChange} id='password'/>
                    <label htmlFor='email'>Email</label>
                    <input type="text" placeholder='email' value={this.state.email} onChange={this.handleChange} id='email'/> */}
                    
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Register
