import React, {useState, Fragment} from 'react';
import {useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { verifyUser, useUserState, useUserDispatch } from '../Context'


function  VerifyForm(props) {

  const dispatch = useUserDispatch()
  const userDetails = useUserState()
  const history = useHistory()

  const nextUrl = userDetails.nextUrl

  const verificationCode = props.verificationCode

  const handleVerify = async (e) => {
      e.preventDefault()
      const payload = {verificationCode}
      try {
        let response = await verifyUser(dispatch, payload)
        if (!response.verified) {
          return
        }
        history.push('/login');
      } catch (error) {
        console.log(error.message);
      }
    }

  return (
    <>
      <h1 className={'text-center'}>Verify</h1>
      <Form className={'text-center'} onSubmit={handleVerify}>
        <p>Please click submit to verify your email address.</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
    </>
  );
}

export default VerifyForm;
