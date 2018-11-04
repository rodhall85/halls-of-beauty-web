import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from '../Testimonials';
import { wrap } from 'module';

jest.mock('../../data/testimonials.json', () => ({
  "testimonials": []
}));

describe('zero testimonials', () => { 
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

    it('should create 0 testimonials', () => {
      expect(testimonials.length).toBe(0);
    });

    it('should not create any testimonials with the quote object', () => {
      expect(testimonials.first().find('.testimonial-quote').length).toBe(0);
    });

    it('should not create any testimonials with correct data for name', () => {
      expect(testimonials.first().find('.testimonial-name').length).toBe(0);
    });
  
    it('should not create any testimonials with correct data for location', () => {
      expect(testimonials.first().find('.testimonial-location').length).toBe(0);
    });

    it('should not create any testimonials with correct data for message', () => {
      expect(testimonials.first().find('.testimonial-message').length).toBe(0);
    });

  });
});