import React from 'react';
import {shallow} from 'enzyme';
 
import {findByTestAttr} from '../../test/testUtils';
import ListDataContainer from './listDataContainer';

/**
 * Factory function to create shallow wrapper for listDataContainer component
 * @function setup
 * @param {object} props - component props specific to this setup 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    return shallow(<ListDataContainer {...props}/>)
}

test('renders without error', () => {
    const wrapper = setup()
    const listDataContainer = findByTestAttr(wrapper, 'list-data-container')
    expect(listDataContainer.length).toBe(1)
})