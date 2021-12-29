import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '307440833182-elddosi1kkg9lcl1oltbv0kle6tnqv5b.apps.googleusercontent.com';

function Logout(props) {
  const onSuccess = () => {
    props.setIsLoggedInGoogle(false);
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
