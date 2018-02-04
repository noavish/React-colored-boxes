import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boxes from './boxes.js'

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Boxes />
            </div>
        );
    }
}

export default App;
