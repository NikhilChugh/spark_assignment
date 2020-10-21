import { actionTypes } from "../actions";

const initialState = {
  dynamicDataObj: {},
};

/**
 * @function dataReducer
 * @param {object} state - State before reducer
 * @param {object} action - Action sent to reducer
 * @returns {object} - New state object
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      let newObj;
      if (action.key in state.dynamicDataObj) {
        newObj = {
          ...state.dynamicDataObj,
          [action.key]: state.dynamicDataObj[action.key].concat(action.data),
        };
      } else {
        newObj = {
          ...state.dynamicDataObj,
          [action.key]: [].concat(action.data),
        };
      }
      return {
        ...state,
        dynamicDataObj: newObj,
      };
    case actionTypes.REMOVE_PERSON:
      let updatedObj;
      if (state.dynamicDataObj[action.key].length > 1) {
        updatedObj = {
          ...state.dynamicDataObj,
          [action.key]: state.dynamicDataObj[action.key].filter(
            (val) => val !== action.data
          ),
        };
      } else {
        let obj = state.dynamicDataObj
        delete obj[action.key];
        updatedObj = {...obj}
      }
      return {
        ...state,
        dynamicDataObj: updatedObj,
      };
    default:
      return state;
  }
};
