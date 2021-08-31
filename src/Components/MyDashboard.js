import React, {useState, useEffect, Fragment} from 'react'
import {useHistory} from 'react-router-dom';

import { useUserDispatch, updateUser, useUserState, checkAndSetTheme, checkAuthRedirect } from '../Context'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {FaUserEdit} from 'react-icons/fa';


function MyDashboard(props) {
  
  const userDetails = useUserState()
  const dispatch = useUserDispatch()
  const [userName, setUserName] = useState(userDetails.user.username)
  const [name, setName] = useState(userDetails.user.name)
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = async (e) => {
    e.preventDefault();
    let partial = true;
    let payload = { userName, name, partial }
    try {
      let response = await updateUser(dispatch, payload)
      setIsEditing(false)
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleEditUser = async (e) => {
    e.preventDefault();
    if (isEditing === true) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <>
      <h1 className={'mb-4 text-center'}>{userDetails.user.username}</h1>

      {isEditing === false && (
        <Fragment>
          <h2 className={'h6'}>Name:</h2>
          <p className={'h3 mb-4'}>{userDetails.user.name}</p>
        </Fragment>
      )}

      <h2 className={'h6'}>Email:</h2>
      <p className={'h3 mb-4'}>{userDetails.user.email}</p>

      <h2 className={'h6'}>Post Count:</h2>
      <p className={'h3 mb-4'}>{userDetails.user.post_count}</p>

      <h2 className={'h6'}>Followers Count:</h2>
      <p className={'h3 mb-4'}>{userDetails.user.followers_count}</p>

      <h2 className={'h6'}>Following Count:</h2>
      <p className={'h3 mb-4'}>{userDetails.user.following_count}</p>

      {isEditing === true && (
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name='name'
              type='text'
              value={name}
              required
              maxLength='255'
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name='username'
              type='text'
              value={userName}
              required
              maxLength='255'
              onChange={e => setUserName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      )}
      <div className={'d-flex justify-content-center'}>
        {isEditing === false && (
          <Button variant="success" onClick={handleEditUser}><FaUserEdit className={'h4'} /> edit</Button>
        )}
        {isEditing === true && (
          <Button variant="danger" onClick={handleEditUser}><b>X</b></Button>
        )}
      </div>
    </>
  );

}

export default MyDashboard;
