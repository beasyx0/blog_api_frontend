import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

import { logoutUser, useAuthDispatch } from '../Context'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function LogoutForm(props) {

  const history = useHistory();
  const dispatch = useAuthDispatch()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      let logoutResponse = await logoutUser(dispatch);
      history.push('/login');  // change once main public page complete
    } catch (error) {
      console.log(error);
    }
      
  }
  return (
    <>
      <h2 className={'h4 mt-5'}>Are you sure you want to log out?</h2>
      <Form onSubmit={handleLogout}>
        <Button variant="danger" type="submit" className={'m-2'}>Logout</Button>
      </Form>
    </>
  )
}

export default LogoutForm;
