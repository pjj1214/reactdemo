import React,{Component} from 'react'
class D14newscontent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
      //动态路由传值
      console.log(this.props.match.params.aid)
      console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>newscontent</h1>
            </div>
        );
    }
}

export default D14newscontent