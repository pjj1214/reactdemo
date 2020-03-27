import React,{ Component } from "react";
import Proptypes from "prop-types";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg: ''
        };
    }
    run = () => {
        alert('header组件的run方法')
    }
    render() {
        return (
            <div>
                我是header组件
    <h1>{this.props.name}<br></br>{this.props.num}</h1>
            <p>{this.props.title}</p>
            <button onClick={this.props.run}>调用父组件的run方法</button>
            <button onClick={this.props.day10.run}>把父组件拿过来用</button>
            <button onClick={this.props.day10.getSonData.bind(this,'子组件传来的值')}>子传父</button>
            </div>
        );
    }
}
Header.defaultProps = {
    name:'header默认name'
}
Header.propTypes = {
    num: Proptypes.number
}

export default Header;