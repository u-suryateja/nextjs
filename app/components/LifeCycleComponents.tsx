
import { Component } from "react";


export class LifeCycleComponents extends Component{
    state={count:10}
    increment=()=>{
            this.setState({count : this.state.count+1})
        }

    render(){
           return(
            <div>
                <h1>Life cycle of Components</h1>
                <h1>Count : {this.state.count}</h1>

                <button className="bg-black text-white broder-2 rounded-xl p-2"
                 onClick={this.increment}>increment</button>
            </div>
        )
        }
        componentDidMount(){
            alert("Component Mounted")
        }
        componentDidUpdate(){
            alert("Component Updated")
        }
        componentWillUnmount(){
            alert("Component Will Unmount")
        }

}