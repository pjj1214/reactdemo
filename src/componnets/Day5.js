import React,{Component} from 'react'
class Day5 extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:'ryan',
            test:'abc'
        }
    }
    run=(e) =>{
        console.log(e)
    }
    valChange=(e) => {
        let dom = this.refs.inp;
        console.log(dom);
        this.setState({
            name:e.target.value
        })
    }
    keyUp = (e) => {
        console.log(e.keyCode);
        if(e.keyCode == 13) {
            console.log(e.target.value)
        }
    }
    getInput=() => {
        alert(this.state.name)
    }
    inputChange = (e) =>{
        this.setState({
            test:e.target.value
        })
    } 
    render() {
        return (<div>
            day5
            <hr/>
            <button onClick={this.run}>事件对象</button>
            <input ref='inp' onChange={this.valChange} value={this.state.name}></input>
            <button onClick={this.getInput}>getInput</button>
            <input  onKeyUp={this.keyUp}></input><hr/>
            <input value={this.state.test} onChange={this.inputChange}></input>
            {this.state.test}
        </div>)
    }

}

export default Day5
