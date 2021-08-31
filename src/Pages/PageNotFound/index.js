import React, {useEffect} from 'react';

import { useUserState, checkAndSetTheme } from '../../Context'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function NotFound(props) {

  const userDetails = useUserState()

  useEffect(() => {
    (async () => {
      let body = document.body;
      let setTheme = await checkAndSetTheme(userDetails, body);
    })();
  }, [userDetails, checkAndSetTheme]);

  return (
    <Container fluid className={'mt-5 pt-5'}>
      <Row>
        <Col xs={8} sm={6} md={4} lg={4} className={'m-auto text-center'}>
          <h1>Page not found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;