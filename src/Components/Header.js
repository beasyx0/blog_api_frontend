import React, {useEffect, Fragment} from 'react'
import {useHistory, useLocation} from 'react-router-dom';

import { useAuthDispatch, useUserState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Col from 'react-bootstrap/Col';


function Header(props) {

  const userDetails = useUserState()

  return (
    <Col className={`mb-4 pt-4 pr-2 pl-2 pb-4 jumbotron ${userDetails.theme === 'dark' ? 'bg-dark' : 'bg-secondary'} text-light border-bottom`}>
      <h1 className={"pt-4 pb-2 display-6"}>The best programming blog, period.</h1>
      <p className={"pb-4 lead"}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p className={"pb-4 lead"}>
        <a className={"btn btn-primary btn-lg"} href="#" role="button">Hire a developer</a>
      </p>
    </Col>
  );
}

export default Header;
