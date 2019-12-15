import React from 'react';
import logo from './asserts/images/logo.svg';
import './asserts/css/App.css';
import Home from './componnets/Home'
// import News from './componnets/News'
import Day5 from './componnets/Day5'
// import Day6 from './componnets/Day6'
// import Day7 from './componnets/Day7'
import Day8 from './componnets/Day8'
import Day10 from './componnets/Day10'
import Day12 from './componnets/Day12'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>我是根组件</h1> */}
      {/* <Home>
      </Home> */}
      {/* <News>
      </News> */}
      <Day5 />
      {/* <Day6 /> */}
      {/* <Day7/> */}
      <Day8/>
      <Day10/>
      <Day12/>
    </div>

  );
}

export default App;
