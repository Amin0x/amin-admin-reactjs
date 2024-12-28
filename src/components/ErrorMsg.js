import React, { Component } from 'react'

const ErrorMsg = (props) => {
    
    return (
        <div class="callout">
          <div class="callout-header">Callout Header</div>
          <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
          <div class="callout-container">
            <p>Some text...</p>
          </div>
        </div>
    );
    
}

export default ErrorMsg
