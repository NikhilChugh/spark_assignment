import React from 'react';
import './listDataContainer.scss';
import PropTypes from 'prop-types';


const ListDataContainer = ({children}) => {
    return(
       <div className="listDataContainer" data-test="list-data-container">{children}</div>
    );
}

ListDataContainer.propTypes = {
    children: PropTypes.node
}

export default ListDataContainer;