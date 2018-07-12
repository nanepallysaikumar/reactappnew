import React, { Component } from 'react';
import { connect} from 'react-redux';
import {fetchposts} from '../actions/postaction';
import propTypes from 'prop-types';

 class Post extends Component {
    componentWillMount() {
        this.props.fetchposts();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.postform) {
            this.props.postdata.unshift(nextProps.postform);
        }
    }
  render() {
      let books = this.props.postdata.map((book, index) => {
        return(
            <div key={index}>
                <h1>Books details</h1>
                <hr/>
                <h3>{book.title}</h3>
                <p>{book.body}</p>
             </div>
        );
      });
    return (
      <div>
       {books}
      </div>
    )
  }
}

Post.propTypes = {
    fetchposts: propTypes.func.isRequired,
    postdata: propTypes.array.isRequired,
    postform: propTypes.object.isRequired
}
const mapStateToProps = state => ({
    postdata: state.posts.items,
    postform: state.posts.item
})
export default connect(mapStateToProps,{fetchposts})(Post);