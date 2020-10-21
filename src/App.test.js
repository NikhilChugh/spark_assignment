import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr} from './test/testUtils';
import App from './App';

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    return shallow(<App {...props} />);
  };
  
  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "homePage-App");
    expect(component.length).toBe(1);
  });
  


