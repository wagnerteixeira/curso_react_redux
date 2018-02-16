import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
   <Family lastName = "Silva" >
     <Member name="Guilherme" />
     <Member name="Roberto" />
     <Member name="Julia" />
     <Member name="Rodrigo" />
   </Family>
, document.getElementById('app'))

