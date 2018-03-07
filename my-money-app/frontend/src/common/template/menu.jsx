import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem  path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label='cadastro' icon='edit'>
            <MenuItem path='#billingCycles'
                      label='Cliclos de Pagamento'
                      icon='usd' />
        </MenuTree>
    </ul>
)