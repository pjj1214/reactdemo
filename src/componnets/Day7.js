import React,{Component} from 'react'
class Day7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['事项1']
        }
    }
    addData= ()=> {
        let val = this.refs.myinput.value
        let tempList = this.state.list
        tempList.push(val)
        this.setState({
            list: tempList
        })
    }
    delData = (index) => {
        let tempList = this.state.list
        tempList.splice(index,1)
        this.setState({
            list:tempList
        })
    }
    render() {
        return (
            <div>
                <p>day7</p>
                <input type="text" ref ='myinput'/> <button onClick={this.addData}>增加</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>{
                            return (
                                <li key={index}>
                                    <input type="text" defaultValue={item} />> <button onClick={this.delData.bind(this,index)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Day7