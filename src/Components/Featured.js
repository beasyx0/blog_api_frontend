import React, {useEffect, useState, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useAuthState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Loader from 'react-loader-spinner';


function Featured(props) {

  const userDetails = useAuthState()
  const [featuredLoading, setFeaturedLoading] = useState(true)

  const featuredPostsFromServer = [
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
    setTimeout(setFeaturedLoading, 2000, false);
  }, [setFeaturedLoading]);

  return (
    <>
      {featuredLoading && (
        <div className={'mt-5 pt-5 text-center'}>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!featuredLoading && (
        <>
        <h2 className={'mb-4 text-decoration-underline'}>Featured</h2>
        {featuredPostsFromServer.map(post=>{
          return (
            <Col xs={12} sm={12} md={9} lg={3} className={'m-auto'}>
              <Card className={`text-center ${userDetails.theme === 'dark' ? 'bg-dark' : 'bg-secondary'} text-light`}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <img src={post.pic} alt="main post pic" className={'mb-3 w-100 rounded'} />
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Button variant="primary">Read Post</Button>
                </Card.Body>
                <Card.Footer className="text-muted">posted: {post.date}</Card.Footer>
              </Card>
              <hr />
            </Col>
          );
        })}
        </>
      )}
    </>
  );
}

export default Featured;
