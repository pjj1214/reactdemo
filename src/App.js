import React,{Component} from 'react';
import logo from './asserts/images/logo.svg';
import './asserts/css/App.css';
import Home from './componnets/Home'
import News from './componnets/News'
import Day5 from './componnets/Day5'
import Day6 from './componnets/Day6'
import Day7 from './componnets/Day7'
import Day8 from './componnets/Day8'
import Day10 from './componnets/Day10'
import Day12 from './componnets/Day12'
import Day13 from './componnets/Day13'
import Day14 from './componnets/Day14'
//函数组件与class组件的区别
// function App() {
//   let flag = true;
//   let changeFlag = () => {
//     console.log(123);
//     flag = !flag
//     console.log(flag);
//   }
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       <h1>我是根组件</h1> */}
//       {/* <Home>
//       </Home> */}
//       {/* <News>
//       </News> */}
//       <Day5 />
//       {/* <Day6 /> */}
//       {/* <Day7/> */}
//       {/* <Day8/>
//       <Day10/> */}
//       <Day12/>
//     </div>

//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag: true,
      title: '我是App组件title'
    };
  }
  changeFlag = ()=> {
    this.setState({
       flag: !this.state.flag
    })
  }
  setTitle = () => {
    this.setState({
      title: '改变后的title'
    })
  }
  render() {
    return (
          <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <h1>我是根组件</h1> */}
      {/* <Home>
      </Home> */}
      {/* <News>
      </News> */}
      {/* <Day5 /> */}
      {/* <Day6 /> */}
      {/* <Day7/> */}
      {/* <Day8/> */}
      {/* <Day10/> */}
      {/* <Day12/> */}
      {/* {this.state.flag?<Day13 title={this.state.title} />:''} <button onClick={this.changeFlag}>修改flag</button>
      <button onClick={this.setTitle}>修改title</button> */}

      <Day14/>
    </div>
    );
  }
}

export default App;
