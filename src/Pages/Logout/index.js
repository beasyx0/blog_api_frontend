import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import { useAuthState, useAuthDispatch, checkAndSetTheme } from '../../Context'
import MyLoader from '../../Components/MyLoader';
import LogoutForm from '../../Components/LogoutForm';
import Messages from '../../Components/Messages';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Logout(props) {

  const history = useHistory();
  const dispatch = useAuthDispatch()
  const userDetails = useAuthState()

  // if no user redirect to login
  useEffect(() => {
    if (!userDetails.user) {
      history.push('/login');
    }
  }, [userDetails, history]);

  useEffect(() => {
    (async () => {
      let body = document.body;
      let setTheme = await checkAndSetTheme(userDetails, body);
    })();
  }, [userDetails, checkAndSetTheme]);

  return (
    <Container className={'mt-5 pt-5'}>
      <MyLoader />
      <Messages />
      <Row>
        {userDetails.loading === false && (
          <Col xs={8} sm={6} md={4} lg={4} className={'m-auto'}>
            <LogoutForm />
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Logout;
