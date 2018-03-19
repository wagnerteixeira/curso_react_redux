import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem  path='/' label='Dashboard 1.0' icon='dashboard' />
        <MenuItem  path='d2' label='Dashboard 2.0' icon='dashboard' />
        <MenuTree label='cadastro' icon='edit'>
            <MenuItem path='billingCycles'
                      label='Cliclos de Pagamento'
                      icon='usd' />
        </MenuTree>
    </ul>
)