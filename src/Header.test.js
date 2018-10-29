import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('should create header container', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('header').length).toBe(1);
  expect(wrapper.find('.header').length).toBe(1);
});

it('should create the logo', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('.logo').length).toBe(1);
});

it('should create the title', () => {
  const wrapper = shallow(<Header />);
  const title = wrapper.find('.title');
  expect(title.length).toBe(1);
  expect(title.text()).toBe('Halls of Beauty');
});

it('should create the mobile menu', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('Burger').length).toBe(1);
});