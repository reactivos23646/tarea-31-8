import React from 'react'

const Header = ({children}) => {//uso prompt children que es llamado composition, me ayuda eliminar dependencias
  return (

          <div style={{color:"red"}}>{children}</div>
   
  )
}

export default Header