import React from 'react';
import '../asserts/css/News.css';
import logo from '../asserts/images/logo.svg'
class News extends React.Component {
    constructor() {
        super();
        this.state={
            news:'震惊',
            color:'red',
            list:[1111,22222,3333],
            list2:[{title:1},{title:2},{title:3}]
        }
    }
    render() {
        let listResult = this.state.list.map((value, index) =>{
            return <li key={index}>{value}</li>
        });
    return (<div>{this.state.news}
        <div className='news'>news</div>
        <div style={{color:'blue'}}>test style</div>
        <div style={{fontSize:'50px'}}>字体大小</div>
        <div style={{backgroundColor:this.state.color}}>bgc red</div>
        <img src={logo} alt='' width='100'/>
        <label htmlFor='name'>姓名</label>
        <input type='text' id='name'/>
        <hr/>
        {listResult}
        <hr/>
        <ul>
            {
                this.state.list2.map((item, index) => {
                return <li key={index}>{item.title}</li>
                })
            }
        </ul>
    </div>)
    }
}
export default News;