import React, { useRef } from "react";
import Hello from './Hello';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import MyComponent from "./MyComponent";
import Say from "./Say";
import CreateUser from "./CreateUser";

function App() {
    const name = 'react';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24,
      padding: '1rem'
    }

    const users = [
      {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
      },
      {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
      },
      {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
      }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }

    return (
      <>
      <Hello />
      <Wrapper />
      <Counter />
      <InputSample />
      <Say />
      <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
      <CreateUser />
      <UserList users = {users} />
      </>
     
    );
}

export default App;