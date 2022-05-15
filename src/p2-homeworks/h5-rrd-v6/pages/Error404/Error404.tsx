import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h2 className={s.error}>404</h2>
                <h4 className={s.oops}>Ooops! Page not found!</h4>
                <p className={s.message}>The page you were looking for doesn't exist. You may have mistyped the address
                    or the page may have
                    moved</p>
                <a className={s.link} href="/pre-junior">Back to Home</a>
            </div>
        </div>
    )
}

export default Error404
