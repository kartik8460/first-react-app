import React from 'react';

class StateClassComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
        console.log(this.state);
    }

    changeMessage() {
        this.setState({
            message: 'Thank You For subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => {this.changeMessage()}}>
                    Subscribe
                </button>
            </div>
        )
    }
}
export default StateClassComponent;