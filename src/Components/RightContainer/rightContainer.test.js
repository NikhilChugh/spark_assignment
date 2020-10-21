import React from "react";
import { shallow } from "enzyme";
import {Provider, useDispatch, useSelector} from 'react-redux';

import { findByTestAttr, storeFactory } from "../../test/testUtils";
import RightContainer from "./rightContainer";

const setup = (props = {},initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Provider store={store}><RightContainer {...props} /></Provider>)
  return wrapper;
};

test("renders without error", () => {
  const wrapper = setup({useDispatch, useSelector});
  const component = findByTestAttr(wrapper, "right-container");
  expect(component.length).toBe(1);
});
