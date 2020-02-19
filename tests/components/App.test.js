import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from 'src/components/App';

describe('<App />', () => {
  it('renders a `.loading` when <App /> has loading prop', () => {
    const wrapper = shallow(<App loading />);
    expect(wrapper.exists('.loading')).to.equal(true);
  });

  it('renders `Route`s when <App /> has loading prop false', () => {
    const wrapper = shallow(<App loading={false} />);
    expect(wrapper.find(Route)).to.have.lengthOf.at.least(2);
  });
});
