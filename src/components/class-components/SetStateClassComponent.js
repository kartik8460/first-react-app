import React, { Component } from 'react'

class SetStateClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleCountIncrement () {
        if(this.state.count+1 >=10) {
            this.setState({
                count: 0
            }, () => {
                console.log(this.state.count);
            })
        } else {
            this.setState({
                count: this.state.count + 1
            }, () => {
                console.log(this.state.count);
            })  
        } 
    }
    // handleCountIncrementFive () {
    //     this.handleCountIncrement();
    //     this.handleCountIncrement();
    //     this.handleCountIncrement();
    //     this.handleCountIncrement();
    //     this.handleCountIncrement();
    // }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.handleCountIncrement()}>Increment</button>
            </div>
        )
    }
}

export default SetStateClassComponent
