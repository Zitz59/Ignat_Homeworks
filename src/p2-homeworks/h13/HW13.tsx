import React, {ChangeEvent} from 'react';
import s from './HW13.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

import {changeBackgroundAC} from '../h10/bll/backgroundColorReducer';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {Request} from './common/Request';



function HW13() {

    // const theme = useSelector<AppStoreType, string>((store) => store.backgroundColor.theme)
    // const dispatch = useDispatch()
    // const onchangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    //     dispatch(changeBackgroundAC(e.currentTarget.value))
    // }

    return (
        <div >
            <hr/>
            <span >
                homeworks 13
            </span>
            <Request/>
            <hr/>
        </div>
    );
}

export default HW13;
