import React from "react";


class University extends React.Component{
    render(){
        return (
            <div>
                <h1> This is a University class component demo</h1>
                <College/>
            </div>
        )
    }
}



class College extends React.Component{
    render(){
        return(
            <div>This is a college class component
            
            </div>
        )
    }
}


export default University