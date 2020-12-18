import React, { Component } from 'react'

export class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            searchURL: this.props.baseURL + '/user/logout'
        }, () => {
            console.log(this.state.searchURL)
            fetch(this.state.searchURL, {
                method: 'GET',
                credentials: 'include',
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
                This is the logout Page
                <form onSubmit={this.handleSubmit}>
                    
                    <button type='submit'>Log Out</button>
                </form>
            </div>
        )
    }
}

export default Logout
