import React from 'react';
import './App.css';
import Board from './components/TicTacToe/Board';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  // const [count, setCount] = React.useState(0);

  // function handleClick(){
  //   setCount(count+1);
  //   console.log(`Button clicked ${count} times`);
  // }
  return (
    <div className="App">
      {/* <h1>Welcome to my App!</h1>
      <MyButton count={count} OnClick={handleClick}/>
      <br/>
      <MyButton count={count} OnClick={handleClick}/>
      <ProfileCard />
      <br/> */}
      {/* <TicTacToe /> */}
      {/* <Board /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
