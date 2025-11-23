

import React from "react";
class StateClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            like : 0
        };
    }

    increment = () => {
    this.setState({ like: this.state.like + 1 });
    }

    render (){
        return (
            <div>
                <h1>Likes : {this.state.like}</h1>
                <button onClick = {this.increment}>Like Me</button>
            </div>
        )
    }
}

export default StateClassComponent