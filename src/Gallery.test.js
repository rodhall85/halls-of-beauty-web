import React from 'react';
import { shallow } from 'enzyme';

import Gallery from './Gallery';

describe('gallery', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Gallery />);
  });

  it('should create gallery container', () => {
    expect(wrapper.find('.gallery-container').length).toBe(1);
  });
  
  it('should create gallery', () => {
    expect(wrapper.find('.gallery').length).toBe(1);
  });
  
  // it('should create 4 pictures', () => {
  //   expect(wrapper.find('.photo').length).toBe(4);
  // });
  
});