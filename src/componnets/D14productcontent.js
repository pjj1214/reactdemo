import React,{Component} from 'react'
import url from 'url'
class D14productcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
      //动态路由传值
      console.log(this.props)
      let search = this.props.location.search;
      console.log(url.parse(search, true).query);
    }
    render() {
        return (
            <div>
                <h1>productcontent</h1>
            </div>
        );
    }
}

export default D14productcontent