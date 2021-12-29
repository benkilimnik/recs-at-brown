import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../../utils/refreshToken';

const clientId =
  '307440833182-elddosi1kkg9lcl1oltbv0kle6tnqv5b.apps.googleusercontent.com';

function LoginGoogle(props) {
  const onSuccess = (res) => {
    props.setIsLoggedInGoogle(true);
    props.setEmail(res.profileObj.name);
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${
    //     res.profileObj.name
    //   } 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    props.setIsLoggedInGoogle(false);
    console.log('Login failed: res:', res);
    alert(`Failed to login. 😢 Please ping this to repo owner`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;
