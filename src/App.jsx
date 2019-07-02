import React, { Component } from 'react';
import Clock from './Clock';
//import { Form, FomrControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2019',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">CountDown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <div>
                    <input
                        placeholder="new date"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline() } >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;