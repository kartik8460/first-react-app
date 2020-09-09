import React from 'react';

const UnknownPropsFunctionalComponent = (props) => {
    return (
        <div>
            <h1>property_1 value is {props.property_1} and property_2 {props.property_1}</h1>
            {props.children}
        </div>
        
    )
} 

export default UnknownPropsFunctionalComponent 