import React,{Component} from 'react'

class Home extends Component {
    constructor(props){
        super(props);
        this.key = 1;
        this.state={
            name: 'ryan',
            msg: '我是msg'
        }
        this.getName=this.getName.bind(this);
    }
    run() {
        alert('run');
    }
    getMsg() {
        alert(this.state.msg);
    }
    getName() {
        alert(this.state.name);
    }
    getMessage= () => {
        alert(this.state.msg)
    }
    setMsg(){
        this.setState({
            msg:'我是改变了的msg'
        })
    }
    setMessage= ()=>{
        this.setState({
            msg:'箭头函数绑定this改变的msg'
        })
    }
    setName =(name) =>{
        this.setState({
            name
        })
    }
    render() {
        return (<div>我是Home组件
            {this.state.name}<br/>
            {this.state.msg}
            <hr/>
            <button onClick={this.run}>run</button><br/>
            <button onClick={this.getMsg.bind(this)}>第一种方式绑定this</button><br/>
            <button onClick={this.getName}>第二种绑定this</button><br/>
            <button onClick={this.getMessage}>第三种绑定this</button><br/>
            <button onClick={this.setMsg.bind(this)}>setMsg</button> <br/>
            <button onClick={this.setMessage}>setMessage</button><br/>
            <button onClick={this.setName.bind(this,'jade')}>setName</button>
        </div>)
        
    }
}

export default Home;