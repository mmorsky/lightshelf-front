import constants from '../constants.js';

function requestLogin(creds) {
  return {
    type: constants.LOGIN,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `{username=${creds.username}&password=${creds.password}`,
  };

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch('http://localhost:3333/api/auth/login', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {
              if (!response.ok) {
                // If there was a problem, we want to
                // dispatch the error condition
                dispatch(loginError(user.message));
                return Promise.reject(user);
              }
              // If login was successful, set the token in local storage
              localStorage.setItem('id_token', user.id_token);
              // Dispatch the success action
              dispatch(receiveLogin(user));
            }).catch(err => console.log('Error: ', err));
  };
}