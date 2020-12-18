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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log('you prevented the default')
        this.setState({
            searchURL: this.props.baseURL + '/user/register'
        }, () => {
            console.log(this.state.searchURL)
            fetch(this.state.searchURL, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token')
                }
            })
            .then(response => {
                return response.json()
            }).then(json => console.log(json),
                err => console.log(err))
        })
    }

    render() {
        return (
            <div>
                This is the Register Page
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='username' value={this.state.username} onChange={this.handleChange} id='username'/>

                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='password' value={this.state.password} onChange={this.handleChange} id='password'/>

                    <label htmlFor='email'>Email</label>
                    <input type="text" placeholder='email' value={this.state.email} onChange={this.handleChange} id='email'/>
                    
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Register
