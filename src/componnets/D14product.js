import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class D14product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list:[{
            'title':11111,
            'aid':1
          },{
            'title':222,
            'aid':2
          },{
            'title':3333,
            'aid':3
          },{
            'title':4444,
            'aid':4
          }]
        };
    }
    render() {
        return (
            <div>
                <h1>News</h1>
                <ul>
                {
                  this.state.list.map((item,key) => {
                    return (
                      <li key={key}>
                        <Link to={`/productcontent?aid=${item.aid}`}>{item.title}</Link>
                      </li>
                    )
                  })
                }
                </ul>
            </div>
        );
    }
}

export default D14product