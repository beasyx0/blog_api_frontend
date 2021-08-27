import React, {useEffect, useState, Fragment} from 'react'

import { useAuthDispatch, useAuthState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function PostFilter(props) {

  const userDetails = useAuthState()

  const linksObjs = [
    {
      id: 1, 
      link: 'newest'
    },
    {
      id: 2, 
      link: 'oldest'
    },
    {
      id: 3, 
      link: 'most-liked'
    },
    {
      id: 4, 
      link: 'most-disliked'
    },
    {
      id: 5, 
      link: 'featured'
    },
  ]

  return (
      <div className={'mb-4'}>
        {linksObjs.map(obj=>{
          return (
            <Button variant="success" className={'m-2'}>{obj.link}</Button>
          );
        })}
      </div>
  );
}

export default PostFilter;
