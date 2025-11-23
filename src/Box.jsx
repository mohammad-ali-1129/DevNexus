

function Laptop (){
    return (
        <div>
            <h2>This is the feature of laptop</h2>
        </div>
    )
}


function Box () {
    return (
        <div>
            <Laptop/>
            <p>This is a feature of the box</p>
        </div>
    )
}
export default Box