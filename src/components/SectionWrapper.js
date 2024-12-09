import React from 'react';
import PropTypes from 'prop-types';
import './SectionWrapper.css';

const SectionWrapper = ({ children, details, title }) => {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
}

SectionWrapper.defaultProps = {
  details: null,
}


export default SectionWrapper;