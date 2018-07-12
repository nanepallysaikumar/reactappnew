import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createpost} from '../actions/postaction';



class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onchangedata = this.onchangedata.bind(this);
        this.onsubmitData = this.onsubmitData.bind(this);
    }
    onchangedata(e) {
        this.setState({[e.target.name] : e.target.value})
    }
    onsubmitData(e) {
       alert("ff");
        let postdata = {
            title : this.state.title,
            body : this.state.body
        }
      this.props.createpost(postdata);
    }
  render() {
    return (
      <div>
          <h1>      
            post data
        </h1>
        <form>
            <label>Title</label><br/>
            <input name="title" value={this.state.title} onChange={this.onchangedata} type="text"/>
            <br/>
            <label>Body</label><br/>
            <textarea name="body" value={this.state.body} onChange={this.onchangedata}/>
            <br/>
           <button onClick={this.onsubmitData} type="button">Submit</button>

        </form>
      </div>
    )
  }
}

export default connect(null,{createpost})(Postform);