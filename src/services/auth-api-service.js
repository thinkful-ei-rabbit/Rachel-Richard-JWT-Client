import config from '../config';

const AuthApiServices = {
  postLogin(user_name, password) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name,
        password,
      }),
    }).then((res) => {
      return !res.ok
        ? res.json().then((e) => Promise.reject(e))
        : res.json(res);
    });
  },
};

export default AuthApiServices;
