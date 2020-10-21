import React from 'react';
import './checkbox.scss';
import PropTypes from 'prop-types';

const Checkbox = ({onCheckboxChange, selected}) => {
    return(
      <input type = 'checkbox' onChange = {(e) => onCheckboxChange(e) } checked = {selected}/>
    );
}

Checkbox.propTypes = {
  onCheckboxChange: PropTypes.func,
  selected: PropTypes.bool.isRequired
}

export default Checkbox;