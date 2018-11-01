import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from './Testimonials';
jest.mock('./data/testimonials.json', () => ({
  "testimonials": [
      {
          "message": "testimonial message",
          "name": "testimonial name",
          "location": "testimonial location"
      }
  ]
}));

[
  {"testimonials":[{"message":"test message","name":"test name","location":"test location"}]}
].forEach(data => {
  describe('testimonials', () => {
    
  });
});

// TODO mock 0, 1, 2, 3, null & undefined testimonials
// in each assert the count and content

it('should create testimonials container', () => {
  const wrapper = shallow(<Testimonials />);
  expect(wrapper.find('.testimonials-container').length).toBe(1);
});

it('should create testimonials', () => {
  const wrapper = shallow(<Testimonials />);
  expect(wrapper.find('.testimonials').length).toBe(1);
  expect(wrapper.find('#testimonials').length).toBe(1);
});

it('should create the section title', () => {
  const wrapper = shallow(<Testimonials />);
  const title = wrapper.find('.section-title');
  expect(title.text()).toContain('Testimonials');
  expect(title.getElement().type).toBe('h2');
});

it('should create 3 testimonials', () => {
  const wrapper = shallow(<Testimonials />);
  const testimonials = wrapper.find('.testimonial');
  expect(testimonials.length).toBe(1);
});