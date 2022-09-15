import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import React, {ChangeEvent, useState} from 'react';
import s from './Request.module.css'
import {requestsAPI} from '../api/api';

export type RequestPropsType = {}

export const Request: React.FC<RequestPropsType> = () => {
    const [value, setValue] = useState<string>('no response, click please!')
    const [checked, setChecked] = useState<boolean>(false)

    const onChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    const onButtonClick = () => {
        requestsAPI.sendRequest(checked)
            .then(response => {
                console.log({...response})
                console.log(response.data.info)
                setValue(response.data.errorText)

            }).catch(Error => {
            console.log({...Error})
            console.log(Error.response.data.info)
            setValue(Error.response.data.errorText)
        })
    }

    return (
        <div className={s.requestBlock}>
            <SuperButton onClick={onButtonClick}>Send</SuperButton>
            <SuperCheckbox checked={checked} onChange={onChecked}/>
            <div>Server says: " {value} "</div>
        </div>
    )
}