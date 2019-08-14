import React from 'react';
import { shallow } from 'enzyme';
import Ghibli from './Ghibli';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Ghibli />);
    expect(wrapper).toMatchSnapshot();
  });
});
