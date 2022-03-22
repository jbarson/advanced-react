import React, {useContext} from 'react'
import {internContext} from './App'

function Interns() {
  const interns=useContext(internContext)
  return (
    <>
    <div>Interns</div>
    {interns.map( intern => <p>{intern}</p>)}
  </>
  )
}

export default Interns