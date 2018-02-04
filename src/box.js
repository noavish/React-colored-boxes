import React, { Component } from 'react';
import './box.css';

class Box extends Component {
    constructor(props){
        super(props);
        this.state = ({backgroundColor: 'rgb(255, 255, 255)'});
        setInterval(()=> {
            this.setState({backgroundColor: `rgb(${this.randomNumber()}, 
                                                 ${this.randomNumber()}, 
                                                 ${this.randomNumber()})`}); }, 100);
    }

    randomNumber() {
        return Math.floor(Math.random()*255);
    }


    render() {
        return (
            <div style={this.state} className="coloredBox" ></div>
        );
    }
}

export default Box;
