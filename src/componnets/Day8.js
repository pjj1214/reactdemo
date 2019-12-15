import React,{Component} from 'react'
import Storage from '../model/storage'
class Day8 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    addList= (e) => {
        let tempList = this.state.list
        if(e.keyCode === 13) {

            let item = {
                checked: false,
                title: this.refs.newwork.value
            }
            tempList.push(item)
            this.setState({
                list: tempList
            })
        }
        Storage.set('list', tempList)
    }
    handleCheckbox= (index) => {
        let tempList = this.state.list
        tempList[index].checked = !tempList[index].checked
        this.setState({
            list:tempList
        })
        Storage.set('list', tempList)
    }
    removeData = (index) => {
        let tempList = this.state.list
        tempList.splice(index, 1)
        this.setState({
            list:tempList
        })
        Storage.set('list', tempList)
    }
    componentDidMount() {
        let list = Storage.get('list')
        if(list) {
            this.setState({
                list
            })
        }
    }
    render() {
        return (
            <div>
                <header>添加待办<input type="text" ref='newwork' onKeyDown={this.addList}/></header>
                <h1>待办事项</h1>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            if(!item.checked) {
                                return (
                                    <li key={index}><input type="checkbox" checked={item.checked} onChange={this.handleCheckbox.bind(this,index)}/> {item.title} 
                                    <button onClick={this.removeData.bind(this,index)}>删除</button></li>
                                )
                            }
                            // return ''
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            if(item.checked) {
                                return (
                                    <li key={index}><input type="checkbox" checked={item.checked} onChange={this.handleCheckbox.bind(this,index)}/> {item.title} 
                                    <button onClick={this.removeData.bind(this,index)}>删除</button></li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Day8