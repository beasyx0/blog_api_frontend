import React, {useState, Fragment} from 'react';
import {useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { loginUser, getUser, useAuthState, useAuthDispatch } from '../Context'


function  LoginForm(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useAuthDispatch()
  const userDetails = useAuthState()
  const history = useHistory()

  const nextUrl = userDetails.nextUrl

  const handleLogin = async (e) => {
      e.preventDefault()
      let payload = {email, password}
      try {
        let response = await loginUser(dispatch, payload)
        if (!response.access) {
          return
        } else {
          let userResponse = await getUser(dispatch)
          history.push(nextUrl);
        }
      } catch (error) {
        setMessage(error.message);
      }
    }

  return (
    <>
      <h1 className={'text-center'}>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
    </>
  );
}

export default LoginForm;
