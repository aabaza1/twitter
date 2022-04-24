import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '8655002014-hafbkaqfrosdnvgtlu409gp6t31506p3.apps.googleusercontent.com';

function Logout(props) {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.setName("Not logged in");

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