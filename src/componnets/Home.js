import React,{Component} from 'react'

class Home extends Component {
    constructor(props){
        super(props);
        this.key = 1;
        this.state={
            name: 'ryan'
        }
    }

    render() {
        return <div>我是Home组件
            {this.state.name}
        </div>
        
    }
}

export default Home;