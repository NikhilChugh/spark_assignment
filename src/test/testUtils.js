
import {createStore} from 'redux';
import rootReducer from '../store/reducers';
/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

/**
 * Create a testing store with imported reducers, initial state
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {store} - Redux store
 */

 export const storeFactory = (initialState) => {
     return createStore(rootReducer, initialState)
 }

 console.log(storeFactory( {
    'Portugal': ["Aasiya Jayavant", "Luvleen Lawrence"],
    'Nicaragua': ["Obasey Chidy"],
  }))