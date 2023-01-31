import React from 'react'
import '../App.css';
function Backdrop({sidess, closesidebar}) {
  return (
    <div className={sidess? "backdrop backdrop--open": "backdrop "} onClick={closesidebar}></div>
  )
}

export default Backdrop