import React, {Component} from 'react';

class PropsClassComponent extends React.Component {
    render() {
        return (
            <h1>Hi My Name is {this.props.first_name} {this.props.last_name}</h1>
        )
    }
}
export default PropsClassComponent;