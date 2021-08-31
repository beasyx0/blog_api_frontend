import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import { useUserState, checkAndSetTheme } from '../../Context'
import MyLoader from '../../Components/MyLoader';
import VerifyForm from '../../Components/VerifyForm';
import Messages from '../../Components/Messages';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Verify(props) {

  const userDetails = useUserState()
  const history = useHistory()

  const nextUrl = userDetails.nextUrl

  const {verificationCode} = useParams()

  // if user redirect to next url or `/`
  useEffect(() => {
    if (userDetails.user) {
      history.push(nextUrl);
    }
  }, [userDetails, history]);

  useEffect(() => {
    (async () => {
      let body = document.body;
      let setTheme = await checkAndSetTheme(userDetails, body);
    })();
  }, [userDetails, checkAndSetTheme]);

  return (
    <Container fluid className={'mt-5 pt-5'}>
      <MyLoader />
      <Messages />
      <Row>
        <Col xs={8} sm={6} md={4} lg={4} className={'m-auto'}>
          {userDetails.loading === false && (
            <VerifyForm verificationCode={verificationCode} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Verify;
