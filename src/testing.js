import React, { Component } from 'react';

class Welcome extends React.Component {
    render() {
        return (
        <h1>Hello , {this.props.name} </h1>
        )
    }
}

// const FlexibleButton = (props) => (
//     <div>
//         <button type='button'> Click Me! </button>   
//     </div>
// )
export default Welcome;