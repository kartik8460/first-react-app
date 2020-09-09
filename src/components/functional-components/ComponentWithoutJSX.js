import React from 'react';

const ComponentWithoutJSX = () => {
    return React.createElement('div',{id: "hello", }, React.createElement('h1',{className: "hello"},'This is a TEXT from COMPONENT-WITHOUT-JSX'))
}

export default ComponentWithoutJSX;