import React,{ Component } from "react"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import D14news from './D14news'
import D14user from './D14user'
import D14home from './D14home'
class Day14 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
            <div>
                <h1>day14 Home</h1>
                <Link to='/'>主页</Link>
                <br/>
                <Link to='/news'>新闻</Link>
                <br/>
                <Link to='/user'>用户</Link>
                <Route path='/' exact component={D14home}></Route>
                <Route path='/news' component={D14news}></Route>
                <Route path='/user' component={D14user}></Route>
                
            </div>
            </Router>
        );
    }
}

export default Day14;