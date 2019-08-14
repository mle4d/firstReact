import React from 'react';
import { shallow } from 'enzyme';
import MyLittlePony from './MyLittlePony';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<MyLittlePony />);
    expect(wrapper).toMatchSnapshot();
  });
});
