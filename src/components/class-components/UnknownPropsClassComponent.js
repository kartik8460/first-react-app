import React, {Component} from 'react';

class UnknownPropsClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi My Name is {this.props.property_1} {this.props.property_2}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default UnknownPropsClassComponent;