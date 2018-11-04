import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from '../Testimonials';
import { wrap } from 'module';

jest.mock('../../data/testimonials.json', () => ({
  "testimonials": [
      {
        "message": "first_message",
        "name": "first_name",
        "location": "first_location"
      }, {
        "message": "second_message",
        "name": "second_name",
        "location": "second_location"
      }
  ]
}));

describe('two testimonials', () => { 
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

    it('should create 2 testimonials', () => {
      console.log(testimonials);
      expect(testimonials.length).toBe(2);
    });

    it('should create testimonials with the quote object', () => {
      expect(testimonials.find('.testimonial-quote').length).toBe(2);
    });

    it('should create testimonials with correct data for name', () => {
      const texts = testimonials.map(t => t.find('.testimonial-name').text());
      expect(texts).toEqual(['first_name,\u00a0', 'second_name,\u00a0']);
    });
  
    it('should create testimonials with correct data for location', () => {
      const texts = testimonials.map(t => t.find('.testimonial-location').text());
      expect(texts).toEqual(['first_location', 'second_location']);
    });

    it('should create testimonials with correct data for message', () => {
      const texts = testimonials.map(t => t.find('.testimonial-message').text());
      expect(texts).toEqual(['first_message', 'second_message']);
    });

  });
});