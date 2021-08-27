import React, {useEffect, useState, Fragment} from 'react'

import { useAuthDispatch, useAuthState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Loader from 'react-loader-spinner';


function Tags(props) {

  const userDetails = useAuthState()

  const [tagsLoading, setTagsLoading] = useState(true)

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
    setTimeout(setTagsLoading, 2000, false);
  }, [setTagsLoading]);

  return (
    <>
      {tagsLoading && (
        <div className={'mt-5 pt-5 text-center'}>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!tagsLoading && (
        <Col xs={12} sm={12} md={4} lg={4} className={'pt-4'}>
          <h2 className={'mb-4 text-decoration-underline'}>Tags</h2>
          {tagObjs.map(tag=>{
            return (
              <Button variant="success" className={'m-2'}>{tag.name} <span className={'p-1 bg-dark text-light rounded-circle'}>{tag.postCount}</span></Button>
            );
          })}
        </Col>
      )}
    </>
  );
}

export default Tags;
