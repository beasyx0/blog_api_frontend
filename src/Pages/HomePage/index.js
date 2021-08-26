import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useAuthState, checkAndSetTheme, checkAuthRedirect } from '../../Context';
import Navigation from '../../Components/Navigation';
import MyLoader from '../../Components/MyLoader';
import MyDashboard from '../../Components/MyDashboard';
import Messages from '../../Components/Messages';
import Featured from '../../Components/Featured';
import Header from '../../Components/Header';
import Posts from '../../Components/Posts';
import Tags from '../../Components/Tags';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage(props) {
  
  const userDetails = useAuthState()
  // const dispatch = useAuthDispatch()
  // const history = useHistory()
  // const location = useLocation()

  // // if no user redirect to login and set next url for redirect
  // useEffect(() => {
  //   (async () => {
  //     let checkAuth = await checkAuthRedirect(dispatch, userDetails, location, history);
  //   })();
  // }, [dispatch, userDetails, location, history]);

  useEffect(() => {
    (async () => {
      let body = document.body;
      let setTheme = await checkAndSetTheme(userDetails, body);
    })();
  }, [userDetails]);

  return (
    <Container fluid className={'pt-5 pb-5 text-center'}>
      <MyLoader />
      <Row>
        <Header />
      </Row>
      <Messages />
      <Row className={'min-vh-50'}>
        {userDetails.loading === false && (
          <Featured />
        )}
      </Row>
      <Row>
        <Posts />
        <Tags />
      </Row>
    </Container>
  );
}

export default HomePage;
