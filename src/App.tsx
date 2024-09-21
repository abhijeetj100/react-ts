import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, DatePicker} from 'antd';
import MyButton from './components/MyButton';
import ProfileCard from './components/ProfileCard';
import TicTacToe from './components/TicTacToe';
import Board from './components/TicTacToe/Board';

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick(){
    setCount(count+1);
    console.log(`Button clicked ${count} times`);
  }
  return (
    <div className="App">
      {/* <h1>Welcome to my App!</h1>
      <MyButton count={count} OnClick={handleClick}/>
      <br/>
      <MyButton count={count} OnClick={handleClick}/>
      <ProfileCard />
      <br/> */}
      {/* <TicTacToe /> */}
      <Board />
    </div>
  );
}

export default App;
