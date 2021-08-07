import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from '../Testimonials';

jest.mock('../../data/testimonials.json', () => ({
  "testimonials": [
      {
        "message": "first_message",
        "name": "first_name",
        "location": "first_location"
      }
  ]
}));

describe('one testimonial', () => { 
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<Testimonials />);
  });

  it('should create testimonials container', () => {
    expect(wrapper.find('.testimonials-container').length).toBe(1);
  });
  
  it('should create testimonials', () => {
    expect(wrapper.find('.testimonials').length).toBe(1);
    expect(wrapper.find('#testimonials').length).toBe(1);
  });
  
  it('should create the section title', () => {
    const title = wrapper.find('.section-title');

    expect(title.text()).toContain('Testimonials');
    expect(title.getElement().type).toBe('h2');
  });
  
  describe('testimonial data', () => {
    let testimonials;

    beforeEach(() => {
      testimonials = wrapper.find('.testimonial');
    });

    it('should create 1 testimonial', () => {
      expect(testimonials.length).toBe(1);
    });

    it('should create testimonials with the quote object', () => {
      expect(testimonials.first().find('.testimonial-quote').length).toBe(1);
    });

    it('should create testimonials with correct data for name', () => {
      expect(testimonials.first().find('.testimonial-name').text()).toEqual('first_name,\u00a0');
    });
  
    it('should create testimonials with correct data for location', () => {
      expect(testimonials.first().find('.testimonial-location').text()).toEqual('first_location');
    });

    it('should create testimonials with correct data for message', () => {
      expect(testimonials.first().find('.testimonial-message').text()).toEqual('first_message');
    });

  });
});