import React, { Component } from 'react';
import './App.css';
import Child from './child';
import Postform from './components/postform';
import Post from './components/post';
import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : 'my new react project',
      increval : 0
    }
    this.getinputvalu = this.getinputvalu.bind(this);
    this.incrementvalu = this.incrementvalu.bind(this);
  }
  getinputvalu(e) {
    this.setState({title : e.target.value})
  }
 
  incrementvalu() {
    this.setState({increval : this.state.increval + 1})
  }
  decrementvalu() {
    this.setState({increval : this.state.increval - 1})
  }
  render() {
    return(
     <Provider store={store}>
        <div>
         <Postform/>
        <Post></Post>
        <input type="text" onChange = {this.getinputvalu} value={this.state.title}/>
        <button onClick= {this.incrementvalu}>increment</button>
        <button onClick={this.decrementvalu.bind(this)}>Decrement button</button>
        <span>{this.state.increval}</span>
         <Child title = {this.state.title}></Child>
      </div>
       </Provider>
    );
  }
}

export default App;
