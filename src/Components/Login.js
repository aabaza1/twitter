import React from 'react';
import { GoogleLogin } from 'react-google-login';

// refresh token

const clientId =
  '8655002014-hafbkaqfrosdnvgtlu409gp6t31506p3.apps.googleusercontent.com';

function Login(props) {
    

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    props.setName(res.profileObj.name)

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
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

export default Login;