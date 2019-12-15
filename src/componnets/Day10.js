import React,{ Component } from "react";
import Header from './Header'
class Day10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '父组件的msg',
            num:123
        }
    }
    run = () =>{
        alert('父组件run')
    }
    getSonRun = () => {
        console.log(this.refs.header)
        this.refs.header.run()
    }
    getSonData = (data) => {
        alert(data)
    }
    render() {
        return (
            <div>
                <h1>day10</h1>
                <Header ref='header' title={this.state.msg} fa={this} run={this.run} day10={this} num={this.state.num}/>
                <button onClick={this.getSonRun}>调用子组件run方法</button>
            </div>
        );
    }
}

export default Day10;