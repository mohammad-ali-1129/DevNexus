import React from 'react';
import react from 'react'

class DashboardClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            color: "red",
            year: 1996
        }
    }

    changeState = () => {
        this.setState({color: "pink", year: 2025});
    }

    render(){
        return (
            <div>
                <h2>This is the dashboard class Component</h2>
                <p>The color is {this.state.color} and year is {this.state.year} </p>
                <button onClick={this.changeState}>
                    Change Year
                </button>
            </div>
        )
    }
}

export default DashboardClassComponent;