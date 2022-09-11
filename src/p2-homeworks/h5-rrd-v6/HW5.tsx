import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './header/Header'
import Pages from './Pages'
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.pageBlock}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
