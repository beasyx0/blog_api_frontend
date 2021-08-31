import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useUserDispatch, useUserState, checkAndSetTheme, checkAuthRedirect } from '../../Context'
import Navigation from '../../Components/Navigation';
import MyLoader from '../../Components/MyLoader';
import MyDashboard from '../../Components/MyDashboard';
import Messages from '../../Components/Messages';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Dashboard(props) {
  
  const userDetails = useUserState()
  const dispatch = useUserDispatch()
  const history = useHistory()
  const location = useLocation()

  // if no user redirect to login and set next url for redirect
  useEffect(() => {
    (async () => {
      let checkAuth = await checkAuthRedirect(dispatch, userDetails, location, history);
    })();
  }, [dispatch, userDetails, location, history]);

  useEffect(() => {
    (async () => {
      let body = document.body;
      let setTheme = await checkAndSetTheme(userDetails, body);
    })();
  }, [userDetails]);

  return (
    <Container fluid className={'mt-5 pt-5 pb-5'}>
      <Messages />
      <MyLoader />
      <Row>
        <Col xs={8} sm={6} md={4} lg={4} className={'m-auto'}>
          {userDetails.loading === false && (
            <MyDashboard />
          )}
        </Col>
      </Row>
    </Container>
  );

}

export default Dashboard;
