import React,{Component} from "react"
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
class Day12 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    axiosGet = () => {
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        axios.get(api).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }
    jsonpGet = () =>{
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        fetchJsonp(api).then(res => {
            return res.json()
        }).then(json =>{
            console.log(json)
        }).catch(e => {
            console.log(e)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.axiosGet}>axios请求数据</button>
                <button onClick={this.jsonpGet}>jsonp请求数据</button>
            </div>
        );
    }
}

export default Day12;