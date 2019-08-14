import React from 'react';
import { shallow } from 'enzyme';
import Skeletor from './Skeletor';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Skeletor />);
    expect(wrapper).toMatchSnapshot();
  });
});
