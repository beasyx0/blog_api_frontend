import React, {useEffect, useState, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useAuthState, checkAndSetTheme, checkAuthRedirect } from '../Context'
import PostFilter from './PostFilter';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Loader from 'react-loader-spinner';


function Posts(props) {

  const userDetails = useAuthState()

  const [postsLoading, setPostsLoading] = useState(true)

  const postsFromServer = [
    {
      id: 1, 
      date: '06-14-92, 07:22pm', 
      pic: 'https://coincentral.com/wp-content/uploads/2018/04/bitcoin-mining.png', 
      title: 'Lets build a blog application with Docker, Django and React!', 
      content: 'This is some content right here. This is some content right here. This is some content right here. This is some content right here.'
    },
    {
      id: 2, 
      date: '06-14-92, 07:22pm', 
      pic: 'https://coincentral.com/wp-content/uploads/2018/04/bitcoin-mining.png', 
      title: 'Learn Javascript for loop, if else and while functions. Plus tests.', 
      content: 'This is some content right here. This is some content right here. This is some content right here. This is some content right here.'
    },
    {
      id: 3, 
      date: '06-14-92, 07:22pm', 
      pic: 'https://coincentral.com/wp-content/uploads/2018/04/bitcoin-mining.png', 
      title: 'Build a Twitter clone with Python, Django, Django-Channels and Javascript.', 
      content: 'This is some content right here. This is some content right here. This is some content right here. This is some content right here.'
    },
  ]

  useEffect(() => {
    setTimeout(setPostsLoading, 2000, false);
  }, [setPostsLoading]);

  return (
    <>
      {postsLoading && (
        <div className={'mt-5 pt-5 text-center'}>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!postsLoading && (
        <>
          <Col xs={12} sm={12} md={12} lg={9} className={'m-auto pt-4'}>
            <h2 className={'mb-4 text-decoration-underline'}>Posts</h2>
            <PostFilter />
            {postsFromServer.map(post=>{
              return (
                <div className={'mt-2 mb-4'}>
                  <Card className={`text-center ${userDetails.theme === 'dark' ? 'bg-dark' : 'bg-secondary'} text-light`}>
                    <Card.Header>Blog Post</Card.Header>
                    <Card.Body>
                      <div className={'d-flex justify-content-center'}>
                        <div className={'col-3'}>
                          <img src={post.pic} alt="main post pic" className={'mb-3 w-100 rounded'} />
                        </div>
                        <div className={'col-9 p-1'}>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>{post.content}</Card.Text>
                        </div>
                      </div>
                      <div className={''}>
                        <Button variant="primary">Read Post</Button>
                      </div>
                    </Card.Body>
                    <Card.Footer className="text-muted">posted: {post.date}</Card.Footer>
                  </Card>
                </div>
              );
            })}
          </Col>
        </>
      )}
    </>
  );
}

export default Posts;
