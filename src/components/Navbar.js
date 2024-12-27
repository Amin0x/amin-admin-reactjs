import React from 'react'

function Navbar(props) {
  return (
    <div className="d-flex justify-content-between" style={{ alignItems: 'center' }}>
      <div>
        <a href="#"><img src="" alt="Logo" /></a>
      </div>
      <div style={{ flex: 1, padding: '0 10px' }}>
        <input 
          type="text" 
          placeholder="Search..." 
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div>
        <a href="#"><i className="fas fa-icon1"></i></a>
        <a href="#"><i className="fas fa-icon2"></i></a>
      </div>
      <div style={{ minHeight: 64, background: '#000', color: '#fff' }}>Navbar</div>
    </div>
  )
}

export default Navbar
