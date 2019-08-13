import React from 'react';
import { shallow } from 'enzyme';
import Cat from './Cat';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Cat />);
    expect(wrapper).toMatchSnapshot();
  });
});
