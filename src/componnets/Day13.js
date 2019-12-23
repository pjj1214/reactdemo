import React,{Component} from 'react'
class Day13 extends Component {
  constructor(props) {
    super(props);
    this.state = {msg: '修改前的msg'};
    console.log('01 构造函数')
  }
  componentWillMount() {
    console.log('02 willMount')
  }
  componentDidMount() {
    console.log('03 didMount')
  }
  componentWillUnmount() {
    console.log('unMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update')
    console.log(nextProps, nextState)
    return true
  }
  componentWillUpdate() {
    console.log('will update')
  }
  componentDidUpdate() {
    console.log('did update')
  }
  componentWillReceiveProps() {
    console.log('will recive props')
  }
  changeMsg = () => {
    this.setState({
      msg: '修改后的msg'
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        Day13  {this.state.msg} <button onClick={this.changeMsg}>修改msg</button>
      </div>
    );
  }
}

export default Day13;