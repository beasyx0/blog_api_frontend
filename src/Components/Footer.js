import React, {useEffect, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useUserState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {FaCopyright, FaGithub, FaStackExchange, FaReddit, FaTwitter} from 'react-icons/fa';


function Footer(props) {

  const userDetails = useUserState()

  return (
    <Col className={`${userDetails.theme === 'dark' ? 'bg-dark' : 'bg-secondary'} text-light border-top`}>
      <Row className={'p-4 d-flex justify-content-between'}>
        <Col xs={12} sm={12} md={12} lg={5} className={''}>
          <p className={'m-2'}><FaCopyright /> Some blog blog. All rights reserved.</p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={5} className={''}>
          <FaGithub className={'m-2 h4 text-primary'} />
          <FaStackExchange className={'m-2 h4 text-primary'} />
          <FaReddit className={'m-2 h4 text-danger'} />
          <FaTwitter className={'m-2 h4 text-info'} />
        </Col>
      </Row>
    </Col>
  );
}

export default Footer;
