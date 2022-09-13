import React, {ChangeEvent} from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {changeBackgroundAC} from '../h10/bll/backgroundColorReducer';

const themes = ['dark', 'red', 'some', 'magenta', 'yellow'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((store) => store.backgroundColor.theme)
    const dispatch = useDispatch()
    const onchangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeBackgroundAC(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperSelect style={{display: 'block', margin: '5px 0'}} options={themes} onChange={onchangeCallback}/>
            <hr/>

        </div>
    );
}

export default HW12;
