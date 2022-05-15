import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'


function Header() {
    return (
        <nav id="mySidenav" className={s.sidenav}>

            <span><NavLink to={'/pre-junior'}><a className={s.preJunior}>PreJunior</a></NavLink></span>

            <span><NavLink to={'/junior'}><a className={s.junior}>Junior</a></NavLink></span>

            <span><NavLink to={'/junior_plus'}><a className={s.juniorPlus}>Junior+</a></NavLink></span>


        </nav>
    )
}

export default Header
