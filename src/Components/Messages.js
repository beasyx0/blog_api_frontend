import React, {Fragment} from 'react';

import { useAuthDispatch, useAuthState, clearMessages } from '../Context';

import Button from 'react-bootstrap/Button';


function Messages(props) {

  const userDetails = useAuthState()
  const dispatch = useAuthDispatch()

  const handleCloseMessages = async (e) => {
    let closeMessages = await clearMessages(dispatch);
  }

  return (
    <>
      {!userDetails.loading && (
        <>
          {userDetails.errorMessage || userDetails.successMessage ? (
            <div className={`mb-4 text-center ${userDetails.errorMessage ? 'text-danger' : 'text-success'}`} onClick={handleCloseMessages}>
              <p role="button">{userDetails.errorMessage ? userDetails.errorMessage : userDetails.successMessage}</p>
            </div>
          ) : ''}
        </>
      )}
    </>
  );
}

export default Messages;
