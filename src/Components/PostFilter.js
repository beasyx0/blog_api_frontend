import React, {useEffect, useState, Fragment} from 'react'

import { useAuthDispatch, useUserState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function PostFilter(props) {

  const userDetails = useUserState()

  const linksObjs = [
    {
      id: 1, 
      type: 'newest'
    },
    {
      id: 2, 
      type: 'oldest'
    },
    {
      id: 3, 
      type: 'most-liked'
    },
    {
      id: 4, 
      type: 'most-disliked'
    },
    {
      id: 5, 
      type: 'featured'
    },
  ]

  return (
    <>
      <div className={'mb-4'}>
        <h2 className={'mb-4 text-decoration-underline'}>Posts</h2>
        {linksObjs.map(obj=>{
          return (
            <Button variant="success" className={'m-2'}>{obj.type}</Button>
          );
        })}
      </div>
    </>
  );
}

export default PostFilter;
