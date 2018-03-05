import React, { Component } from 'react';
import Comment from './Comment'
import Author from './Author'
import './App.css';


class Post extends Component {
  render() {
    const {title, author, body, comments, allAuthors} = this.props

    {/*let allComments = [
      <Comment text={comments[0]}/>,
      <Comment text={comments[1]}/>,
      <Comment text={comments[2]}/>
    ]*/}

    let allComments = comments.map(function(comment, index) {
      return <Comment key={index} text={comment} id={index} />
    })

    let authors = allAuthors.map(function(eachAuthor, index) {
      return <Author key={index} author={eachAuthor} id={index} />
    })

    return (
      <div className="div-wrapper">
        <h1 className="title-h1">{title}</h1>
        {authors}
        <p>{body}</p>
        <h3>Comments:</h3>
        {allComments}
      </div>
    )
  }
}

export default Post;
