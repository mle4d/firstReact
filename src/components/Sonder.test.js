import React from 'react';
import { shallow } from 'enzyme';
import Sonder from './Sonder';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Sonder />);
    expect(wrapper).toMatchSnapshot();
  });
});
