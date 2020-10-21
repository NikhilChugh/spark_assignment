import {actionTypes} from "../actions";
import { storeFactory } from "../../test/testUtils";

describe("add and remove person action dispatcher", () => {
   const  dynamicDataObj = {
      'Portugal': ["Aasiya Jayavant", "Luvleen Lawrence"],
      'Nicaragua': ["Obasey Chidy"],
    }
  let store;
  const initialState = {"dataReducer" : {dynamicDataObj}};
  beforeEach(() => {
    store = storeFactory(initialState);
  });
  describe("add person", () => {
    test("updates state correctly for key already exists", () => {
      const testData = { key: "Portugal", value: "Rey Mibourne" };
      store.dispatch({
        type: actionTypes.ADD_PERSON,
        key: testData.key,
        data: testData.value,
      })
      const newState = store.getState();
      const expectedState = {
          dataReducer: {
          dynamicDataObj: {
            'Portugal': ["Aasiya Jayavant", "Luvleen Lawrence", "Rey Mibourne"],
            'Nicaragua': ["Obasey Chidy"],
          }
        }
      };
      expect(newState).toEqual(expectedState)
    });
    test("updates state correctly for key not already exists", () => {
        const testData = { key: "Marshall Islands", value: "Aaron Almaraz" };
        store.dispatch({
          type: actionTypes.ADD_PERSON,
          key: testData.key,
          data: testData.value,
        });
        const newState = store.getState();
        console.log(store.getState())
        const expectedState = {
            dataReducer: {
            dynamicDataObj: {
              'Portugal': ["Aasiya Jayavant", "Luvleen Lawrence"],
              'Nicaragua': ["Obasey Chidy"],
              'Marshall Islands': ["Aaron Almaraz"]
            }
        }
        };
        expect(newState).toEqual(expectedState)
    });
  });
  describe("remove person", () => {
    test("updates state correctly for the key having more than one data value in array", () => {
        const testData = { key: "Portugal", value: "Aasiya Jayavant" };
        store.dispatch({
          type: actionTypes.REMOVE_PERSON,
          key: testData.key,
          data: testData.value,
        });
        const newState = store.getState();
        const expectedState = {
            dataReducer:{
            dynamicDataObj: {
              Portugal: ["Luvleen Lawrence"],
              Nicaragua: ["Obasey Chidy"],
            }
        }
        };
        expect(newState).toEqual(expectedState)
    });
    test("updates state correctly for the key having single data value in array", () => {
        const testData = { key: "Nicaragua", value: "Obasey Chidy" };
        store.dispatch({
          type: actionTypes.REMOVE_PERSON,
          key: testData.key,
          data: testData.value,
        });
        const newState = store.getState();
        const expectedState = {
            dataReduer: {
            dynamicDataObj: {
              Portugal: ["Aasiya Jayavant", "Luvleen Lawrence"]
            }
        }
        };
        expect(newState).toEqual(expectedState)
    });
  });
});