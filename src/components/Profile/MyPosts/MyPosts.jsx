import React from 'react'; 
import './MyPosts.css';
import Post from './Post/Post';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyPosts = () => {

  let postsData = [
    {id: 1, message:'Hi, how are you?', author:'Oleg'},
    {id: 2, message:'It is my first post.', author:'Me'},
    {id: 3, message:'I am fine. And you?',author:'Oleg'},
    {id: 4, message:'Ok!',author:'Me'}
]

  return(
      <div className="container">
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="name" placeholder="Enter post title..." />
              <Form.Label>Your post:</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your post text..."/>
            </Form.Group>
            <Button type="submit">Add Post</Button>
            <br /><br />
          </Form>
        <Post message={postsData[0].message} author={postsData[0].author}/><br />
        <Post  message={postsData[1].message} author={postsData[1].author}/><br />
        <Post message={postsData[0].message} author={postsData[0].author} /><br />
        <Post  message={postsData[1].message} author={postsData[1].author}/><br />
      </div> 
  )
}

export default MyPosts;