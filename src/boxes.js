import React, { Component } from 'react';
import Box from './box.js'

class Boxes extends Component {
    constructor(props){
        super(props);
        this.state = {boxesCount: 0, increase: true};
        this.createBoxes = this.createBoxes.bind(this);
        setInterval(this.createBoxes, 50);
    }

    createBoxes(){
        if (this.state.increase && this.state.boxesCount < 75) {
            this.setState({boxesCount: this.state.boxesCount+1});
        } else if (this.state.increase && this.state.boxesCount >= 75){
            this.setState({increase: false});
        } else if (!this.state.increase && this.state.boxesCount > 0){
            this.setState({boxesCount: this.state.boxesCount-1});
        } else if (!this.state.increase && this.state.boxesCount == 0){
            this.setState({increase: true});
        }
    }


    render() {
        let boxes = [];
        for (let i=0; i < this.state.boxesCount; i++) {
            boxes.push(<Box key={i} />);
        }
        return(
            <div>
                { boxes }
            </div>
        );
    }
}

export default Boxes;