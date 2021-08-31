import React, {Fragment} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import { useUserState } from '../Context'

import Loader from 'react-loader-spinner';


function MyLoader(props) {
  const userDetails = useUserState()

  return (
      <>
        {userDetails.loading && (
          <div className={'mt-5 pt-5 text-center'}>
            <Loader type="Rings" color="#00BFFF" height={80} width={80} />
          </div>
        )}
      </>
    );
  }

export default MyLoader;
