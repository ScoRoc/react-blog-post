import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: 'Dinosaurs are awesome!',
  author: 'Stealty Stegosaurus',
  body: 'Check out this body property!',
  comments: [
    'First!',
    'Great post!',
    'Hire this author now!'
  ],
  allAuthors: [
    'Stealthy Stegosaurus',
    'Tiny T-Rex',
    'Ivory Iguanodon'
  ]
}

ReactDOM.render(
  <Post
  title={post.title}
  author={post.author}
  body={post.body}
  comments={post.comments}
  allAuthors={post.allAuthors}
  />,
  document.getElementById('root')
);
registerServiceWorker();
