import React from 'react';
import './App.css';
// import FunctionalComponent from './components/functional-components/FunctionalComponent';
// import ClassComponent from './components/class-components/ClassComponent';
// import ComponentWithJSX from './components/functional-components/ComponentWithJSX';
// import ComponentWithoutJSX from './components/functional-components/ComponentWithoutJSX';
// import PropsFunctionalComponent from './components/functional-components/PropsFunctionalComponent';
// import UnknownPropsFunctionalComponent from './components/functional-components/UnknownPropsFunctionalComponent';
// import PropsClassComponent from './components/class-components/PropsClassComponent';
// import UnknownPropsClassComponent from './components/class-components/UnknownPropsClassComponent';
// import StateClassComponent from './components/class-components/StateClassComponent';
// import SetStateClassComponent from './components/class-components/SetStateClassComponent';
import DestructuringComponent from './components/functional-components/DestructuringComponent';

import 
function App() {
  return (
    <div className="App">
      {/* <h1>Components - Types of Components & with and without JSX Syntax */}
        {/*
          <FunctionalComponent />
          <ClassComponent />
          <ComponentWithJSX />
          <ComponentWithoutJSX/> 
        */}

      {/* <h1>Props (functional Component) - How to Pass property to the children Component ↓ </h1> */}
        {/* 
          <PropsFunctionalComponent first_name="Kartik" last_name="Gupta"/>
          <PropsFunctionalComponent first_name="Mandeep" last_name="Singh"/>
          <PropsFunctionalComponent first_name="Shubham" last_name="Sharma"/>
          <PropsFunctionalComponent first_name="Zeel" last_name="Thakker"/> 
        */}

      {/* Props (Class Component) - How to Pass property to the children Component ↓ */}
        {/* <PropsClassComponent first_name="Parth" last_name="Nayak"/> */}


      {/* To Add unknown property (functional Component)↓ */}
        {/*       
          <UnknownPropsFunctionalComponent property_1="XYZ" property_2="ABC">
            <p>This is Children props</p>
          </UnknownPropsFunctionalComponent>

          <UnknownPropsFunctionalComponent property_1="XYZ" property_2="ABC">
            <button>Action</button>
          </UnknownPropsFunctionalComponent>
        */}
      


      {/* To Add unknown property (Class Component)↓ */}
        {/* 
          <UnknownPropsClassComponent property_1="qwerty" property_2="zxasqw">
            <p>Unknown Property</p>
          </UnknownPropsClassComponent> 
        */}

        {/* State in React (Class Component) ↓ */}
          {/* <StateClassComponent/> */}

      {/* Destructuring Props and State ↓ */}
       
    </div>
  );
}

export default App;
