import React from 'react';
import PropTypes from 'prop-types';
import './SectionWrapper.css';

const SectionWrapper = ({ children, details, title }) => {
  return(
    <div className="card">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-content">
      {children}
      </div>
    </div>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
}

SectionWrapper.defaultProps = {
  
}


export default SectionWrapper;