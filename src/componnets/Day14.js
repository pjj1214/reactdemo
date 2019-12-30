import React,{ Component } from "react"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import D14news from './D14news'
import D14user from './D14user'
import D14home from './D14home'
import D14newscontent from './D14newscontent'
import D14product from './D14product'
import D14productcontent from './D14productcontent'
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
                <br/>
                <Link to='/product'>产品</Link>
                <Route path='/' exact component={D14home}></Route>
                <Route path='/news' component={D14news}></Route>
                <Route path='/user' component={D14user}></Route>
                <Route path="/product" component={D14product} />
                <Route path='/content/:aid' component={D14newscontent}></Route>
                <Route path='/productcontent' component={D14productcontent}></Route>
                
            </div>
            </Router>
        );
    }
}

export default Day14;