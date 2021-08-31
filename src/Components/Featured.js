import React, {useEffect, useState, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useUserState, checkAndSetTheme, checkAuthRedirect, usePostState, usePostDispatch, getFeaturedPosts } from '../Context'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Loader from 'react-loader-spinner';

import {FaReadme} from 'react-icons/fa';


function Featured(props) {

  const userDetails = useUserState()

  const postDetails = usePostState()
  const postDispatch = usePostDispatch()

  const [featuredPosts, setFeaturedPosts] = useState('')

  useEffect(() => {
    (async () => {
      let featuredPostResponse = await getFeaturedPosts(postDispatch);
      setFeaturedPosts(featuredPostResponse.results);
    })();
  }, [postDispatch]);

  return (
    <>
      {postDetails.featuredPostsLoading && (
        <Col xs={12} sm={12} md={12} lg={4} className={'mt-5 text-center min-vh-50'}>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </Col>
      )}
      {!postDetails.featuredPostsLoading && (
          <>
          <h2 className={'mb-4 text-decoration-underline'}>Featured</h2>
          {featuredPosts && (
            <>
              {featuredPosts.map(post=>{
                return (
                  <Col xs={12} sm={12} md={12} lg={4}>
                    <Card className={`mb-5 ${userDetails.theme === 'dark' ? 'bg-dark' : 'bg-secondary'} text-center text-light`}>
                      <Card.Header>Featured</Card.Header>
                      <Card.Body>
                        <img src={post.pic} alt="main post pic" className={'mb-3 w-100 rounded'} />
                        <Card.Title>{post.title}</Card.Title>
                        <a href="#"><FaReadme className={'h2 text-primary'} /></a>
                      </Card.Body>
                      <Card.Footer className="text-muted">posted: {post.created_at}</Card.Footer>
                    </Card>
                  </Col>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Featured;
