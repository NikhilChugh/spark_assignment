import React from "react";
import "./leftContainer.scss";
import {useSelector, useDispatch} from 'react-redux';
import Checkbox from '../../Common/Checkbox/checkbox';
import {actionTypes} from '../../store/actions';
import { dataObj } from "../../Constant/dataConstant";

const LeftContainer = () => {

  const dispatch = useDispatch();

  const dynamicDataObj = useSelector(state => state.dataReducer.dynamicDataObj)

  const checkboxChangeHandler = (e,key, data) => {
      if(e.target.checked){
          console.log(key, data)
       dispatch({type: actionTypes.ADD_PERSON, key: key, data: data})
      }
      else{
        dispatch({type: actionTypes.REMOVE_PERSON, key: key, data: data})
      }
  }  

  const defaultCheckboxSelectHandler = (key, data) => {
         if(key in dynamicDataObj){
             if(dynamicDataObj[key].includes(data)){
                return true
             }
         }
         else{
             return false
         }
  }
  let content;
  content = Object.keys(dataObj).map((key,idx) => {
    return (
      <React.Fragment key = {idx}>
        <h3>{key}</h3>
        <ul className="dataObjectList">
          {dataObj[key].map((data, index) => {
            return <>
            <li key={index}><Checkbox selected = {defaultCheckboxSelectHandler(key,data)}  onCheckboxChange = {(e) => checkboxChangeHandler(e,key, data)}/><span>{data}</span></li>
            </>
          })}
        </ul>
      </React.Fragment>
    );
  });
  return <div className="leftContainer" data-test="left-container">{content}</div>;
};

export default LeftContainer;
