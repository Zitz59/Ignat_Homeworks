import React from 'react'
import styles from './Message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messageType) {
    return (
        <div className={styles.messageWrapper}>
            <div className={styles.messageBlock}>
                <div>
                    <img className={styles.avatar} src={props.avatar}/>
                </div>
                <div className={styles.message}>
                    <div className={styles.messageName}>
                        <h4>{props.name}</h4>
                    </div>
                    <div className={styles.messageText}>{props.message}</div>
                    <div className={styles.messageTime}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message