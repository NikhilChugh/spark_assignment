import React from "react";
import "./rightContainer.scss";
import { useSelector, useDispatch } from "react-redux";
import {actionTypes} from '../../store/actions';
import ListDataContainer from "../../Common/ListDataContainer/listDataContainer";

const RightContainer = () => {
  
  const dispatch = useDispatch()
  const dynamicDataObj = useSelector(
    (state) => state.dataReducer.dynamicDataObj
  );


  const listDataRemoveHandler = (key, data) => {
     dispatch({type: actionTypes.REMOVE_PERSON, key: key, data: data})
  }
  let content;
  if (Object.keys(dynamicDataObj).length !== 0) {
    content = Object.keys(dynamicDataObj).sort().reverse().map((key, idx) => {
      return (
        <React.Fragment key = {idx}>
          <h3>{key}</h3>
          <ul className="dataObjectList">
            {dynamicDataObj[key].map((data, index) => {
              return (
                <>
                  <li key= {index}>
                    <ListDataContainer>
                      <span>{data}</span>
                      <span onClick = {() => listDataRemoveHandler(key, data)}>X</span>
                    </ListDataContainer>
                  </li>
                </>
              );
            })}
          </ul>
        </React.Fragment>
      );
    });
  } else {
    content = <div className="noValueMessage">No Value Selected</div>;
  }
  return <div className="rightContainer" data-test="right-container">{content}</div>;
};

export default RightContainer;
