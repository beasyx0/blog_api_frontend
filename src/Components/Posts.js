import React, {useEffect, useState, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { 
  useAuthDispatch, 
  useUserState, 
  checkAndSetTheme, 
  checkAuthRedirect, 
  usePostState, 
  usePostDispatch, 
  getNewestPosts,
  mimickPostsFromServerSuccess,
  mimickPostsFromServerRequest
} from '../Context'

import PostFilter from './PostFilter';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Loader from 'react-loader-spinner';


function Posts(props) {

  const userDetails = useUserState()

  const postDetails = usePostState()
  const postDispatch = usePostDispatch()

  const [posts, setPosts] = useState('')

  useEffect(() => {
    (async () => {
      let postResponse = await getNewestPosts(postDispatch);
      setPosts(postResponse.results);
    })();
  }, [postDispatch]);

  return (
    <>
      {postDetails.postsLoading && (
        <div className={'pt-5'}>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!postDetails.postsLoading && (
        <>
          {posts && (
            <>
              {posts.map(post=>{
                return (
                  <div className={'mt-2 mb-5'}>
                    <Card className={`text-center ${userDetails.theme === 'dark' ? 'bg-dark' : 'bg-secondary'} text-light`}>
                      <Card.Header>Blog Post</Card.Header>
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Button variant="primary">Read Post</Button>
                      </Card.Body>
                      <Card.Footer className="text-muted">posted: {post.created_at}</Card.Footer>
                    </Card>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Posts;
