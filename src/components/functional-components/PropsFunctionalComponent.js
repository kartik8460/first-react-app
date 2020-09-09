import React from 'react';

const PropsFunctionalComponent = (props) => {
    console.log(props);
    return (
        <h1>Hi My Name is {props.first_name} {props.last_name}</h1>
    )
}
export default PropsFunctionalComponent;