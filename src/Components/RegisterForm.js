import React, {useState, Fragment} from 'react';
import {useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { registerUser, loginUser, getUser, useUserState, useUserDispatch } from '../Context'


function  RegisterForm(props) {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const dispatch = useUserDispatch()
  const userDetails = useUserState()
  const history = useHistory()

  const nextUrl = userDetails.nextUrl

  const handleRegister = async (e) => {
      e.preventDefault()
      let payload = {email, username, password, password2}
      try {
        let response = await registerUser(dispatch, payload)
        if (!response.registered) {
          return
        }
        history.push('/');
      } catch (error) {
        console.log(error.message);
      }
    }

  return (
    <>
      <h1 className={'text-center'}>Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={`${userDetails.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className={`${userDetails.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            name='username'
            type='text'
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={`${userDetails.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword2">
          <Form.Label>Password (again)</Form.Label>
          <Form.Control
            className={`${userDetails.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            name='password'
            type='password'
            value={password2}
            required
            onChange={e => setPassword2(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default RegisterForm;
