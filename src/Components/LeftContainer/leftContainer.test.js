import React from 'react';
import {shallow} from 'enzyme';
import {Provider, useDispatch, useSelector} from 'react-redux';

import {findByTestAttr, storeFactory} from '../../test/testUtils';
import  LeftContainer from './leftContainer';



const setup = (props = {},initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper =  shallow(<Provider store = {store}><LeftContainer {...props}/></Provider>)
    return wrapper;
  };
  
  test("renders without error", () => {
    const wrapper = setup({useDispatch, useSelector});
    console.log(wrapper.dive().debug())
    const component = findByTestAttr(wrapper.dive(), "left-container");
    expect(component.length).toBe(1);
  });