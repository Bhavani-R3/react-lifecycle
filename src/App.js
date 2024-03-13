import React, { Component } from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import Counter from "./component/Counter";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.mountHandler = this.mountHandler.bind(this)
        this.unMountHandler = this.unMountHandler.bind(this)
    }

    mountHandler() {
      console.log(`component mounted`)
      
      ReactDOM.render(
        <React.StrictMode>
          <Counter/>
        </React.StrictMode>
     , document.getElementById('renderHere')) 
     /*  let root1 = ReactDOM.createRoot(document.getElementById('renderHere'))
      root1.render(
        <React.StrictMode>
          <Counter/>
        </React.StrictMode> 
        ) */
      
    }

    unMountHandler() {
      console.log(`component unmounted`)
      ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'))
     /*  let root1 = ReactDOM.createRoot(document.getElementById('renderHere'))
      root1.unmount() */
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>React Lifecycle</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={this.mountHandler} className="btn btn-success">Mount Component</button>
                        <button  onClick={this.unMountHandler} className="btn btn-danger float-end">Unmount Component</button>
                    </div>
                </div>

                <section id="renderHere"></section>
            </div>
        )
    }
}

