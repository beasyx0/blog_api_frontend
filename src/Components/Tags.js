import React, {useEffect, useState, Fragment} from 'react'

import { useAuthDispatch, useAuthState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function Tags(props) {

  const userDetails = useAuthState()

  const tagObjs = [
    {
      id: 1, 
      name: 'Docker',
      postCount: 23
    },
    {
      id: 2, 
      name: 'Python',
      postCount: 54
    },
    {
      id: 3, 
      name: 'Javascript',
      postCount: 87
    },
    {
      id: 4, 
      name: 'Django',
      postCount: 24
    },
    {
      id: 5, 
      name: 'React',
      postCount: 66
    },
    {
      id: 6, 
      name: 'Bootstrap',
      postCount: 90
    },
    {
      id: 7, 
      name: 'HTML',
      postCount: 34
    },
  ]

  useEffect(() => {

  }, []);

  return (
  <>
    <Col xs={12} sm={12} md={12} lg={2} className={'pt-4'}>
      <h2 className={'mb-4 text-decoration-underline'}>Tags</h2>
      {tagObjs.map(tag=>{
        return (
          <p><Button variant="secondary" className={'btn-lg'}>{tag.name} <span className={'p-1 bg-dark text-light rounded-circle'}>{tag.postCount}</span></Button></p>
        );
      })}
    </Col>
  </>
  );
}

export default Tags;
