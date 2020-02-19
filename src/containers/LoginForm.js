import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { changeField } from 'src/actions/auth';

// == Data / state
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    console.log('handleLogin : container');
  },
  handleLogout: () => {
    console.log('handleLogout : container');
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
