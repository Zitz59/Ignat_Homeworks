import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        console.log('timerId', timerId)
        clearInterval(timerId)
    }
    const start = () => {
        // stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
            console.log(id)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    }
    const onMouseLeave = () => {

        setShow(false)
        // close
    }
    const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num

    const stringTime = (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>:
            <span>{getTwoDigitsString(date.getMinutes())}</span>:
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )

    // fix with date
    const stringDate = (
        <div>
            <span>{(date.toDateString())}</span>.
        </div>)


    // fix with date

    return (
        <div className={s.timerContainer}>
            <div className={s.timerBlock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>


                {stringTime}
            </div >

            {show && (
                <div className={s.dateBlock}>
                    {stringDate}
                </div>
            )}

            <div className={s.buttonContainer}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
