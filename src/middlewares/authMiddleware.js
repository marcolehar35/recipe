/* eslint-disable no-console */
import axios from 'axios';

import {
  CHECK_LOGGED,
  LOGIN,
  LOGOUT,
  setUser,
} from 'src/actions/auth';

// Fonction utilisée par les différents catch pour la gestion de l'erreur
const handleError = (error) => {
  console.log('Une erreur s\'est produite', error);
};

// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    console.log(response);
    store.dispatch(setUser(response.data.logged, response.data.info));
  };
  // En fonction de l'action, je réagis
  switch (action.type) {
    case CHECK_LOGGED: {
      axios({
        method: 'post',
        url: 'http://localhost:3001/isLogged',
        withCredentials: true,
      })
        .then(saveUser)
        .catch(handleError);
      break;
    }

    case LOGIN: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        withCredentials: true,
        data: {
          email: state.auth.email,
          password: state.auth.password,
        },
      })
        .then(saveUser)
        .catch(handleError);
      break;
    }

    case LOGOUT: {
      axios({
        method: 'post',
        url: 'http://localhost:3001/logout',
        withCredentials: true,
      })
        .then(saveUser)
        .catch(handleError);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
