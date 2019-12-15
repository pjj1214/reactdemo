import React, {Component} from 'react'
class Day6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg:"react表单",
            name:'ryan',  
            sex:'1',   
            city:'',      
            citys:[ 

                
                '北京','上海','深圳'            
            ],
            hobby:[   
                {  
                    'title':"睡觉",
                    'checked':true
                },
                {  
                    'title':"吃饭",
                    'checked':false
                },
                {  
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info)
    }
    handleInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }
    handleSelect=(e) => {
        this.setState({
            city: e.target.value
        }) 
    }
    handleHobby= (index) => {
        let hobby = this.state.hobby
        hobby[index].checked = !hobby[index].checked
        this.setState({
            hobby
        })
    }
    handelInfo = (e) => {
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
                Day6 <hr></hr>
                <form onSubmit={this.handleSubmit}>
                   姓名： <input type="text" value={this.state.name} onChange={this.handleInput} /> <br/>
                    性别： <input type="radio" value='1' checked={this.state.sex === '1'} onChange={this.handleSex} /> 男
                    <input type="radio" value='2' checked={this.state.sex ==='2'} onChange={this.handleSex} /> 女 <br/>
                    居住城市： <select onChange={this.handleSelect} value={this.state.city}>
                        {this.state.citys.map((item,index) => {
                            return (<option value={item} key={index}>{item}</option>) 
                        })}
                    </select> <br/>
                    {
                        this.state.hobby.map((item,index) => {
                            return (
                                    <span key={index}>
                                        <input type="checkbox" checked={item.checked} onChange={this.handleHobby.bind(this,index)} /> {item.title}
                                    </span>
                                )
                        })
                    }
                    <br/>
                    备注：<textarea cols="30" rows="10" value={this.state.info} onChange={this.handelInfo}></textarea>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default Day6