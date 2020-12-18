import React, { Component } from 'react'

export class CreateTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: '',
            date: '',
            budget: '',
            created_at: ''
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
            searchURL: this.props.baseURL + '/api/v1/trips/'
        }, () => {
            console.log(this.state.searchURL)
            fetch(this.state.searchURL, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    destination: this.state.destination,
                    date: this.state.date,
                    budget: this.state.budget
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
                This is the Create Trip Page
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='destination'>Destination</label>
                    <input type="text" placeholder='destination' value={this.state.destination} onChange={this.handleChange} id='destination'/>

                    <label htmlFor='date'>Date</label>
                    <input type="date" placeholder='date' value={this.state.date} onChange={this.handleChange} id='date'/>

                    <label htmlFor='budget'>Budget</label>
                    <input type="text" placeholder='budget' value={this.state.budget} onChange={this.handleChange} id='budget'/>
                    
                    <button type='submit'>Create New</button>
                </form>
            </div>
        )
    }
}

export default CreateTrip
