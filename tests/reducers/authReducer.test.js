import { expect } from 'chai';

import authReducer from 'src/reducers/auth';

describe('reducer for auth', () => {
  it('is a function', () => {
    expect(authReducer).to.exist;
    expect(authReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(authReducer()).to.be.eql({
      email: '',
      password: '',
      isLogged: false,
      user: {},
    });
  });
});
