import React from "react";
import Hello from './Hello';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import MyComponent from "./MyComponent";
import Say from "./Say";

function App() {
    const name = 'react';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24,
      padding: '1rem'
    }

    return (
      <>
      <Hello />
      <Wrapper />
      <Counter />
      <InputSample />
      <Say />
      <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
      <UserList />
      </>
     
    );
}

export default App;