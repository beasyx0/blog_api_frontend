import React, {useEffect, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useUserState, checkAndSetTheme, checkAuthRedirect } from '../../Context';
import Navigation from '../../Components/Navigation';
import MyLoader from '../../Components/MyLoader';
import MyDashboard from '../../Components/MyDashboard';
import Messages from '../../Components/Messages';
import Featured from '../../Components/Featured';
import Header from '../../Components/Header';
import Posts from '../../Components/Posts';
import Tags from '../../Components/Tags';
import Footer from '../../Components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PostFilter from '../../Components/PostFilter';


function HomePage(props) {
  
  const userDetails = useUserState()

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
    <Container fluid className={'pt-5 text-center'}>
      <MyLoader />
        <Row>
          <Header />
        </Row>
        {userDetails.loading === false && (
          <>
            <Messages />
            <Row>
              <Col xs={12} sm={12} md={10} lg={10} className={'m-auto'}>
                <Row className={'pt-4 d-flex justify-content-center'}>
                  <Featured />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={10} lg={10} className={'m-auto'}>
                <Row className={'pt-4 d-flex justify-content-center'}>
                  <Col xs={12} sm={12} md={12} lg={7} className={'min-vh-100'}>
                    <PostFilter />
                    <Posts />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={4} className={'mb-5'}>
                    <Tags />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Footer />
            </Row>
          </>
        )}
    </Container>
  );
}

export default HomePage;
