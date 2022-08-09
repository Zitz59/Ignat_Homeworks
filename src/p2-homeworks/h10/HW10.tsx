import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import s from './HW10.module.css'


function HW10() {
    // @ts-ignore
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    console.log(loading)

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        console.log('loading...')
        const timeout = setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)

        return () => clearTimeout(timeout)
    };

    return (
        <div className={s.hw10Container}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.ldsHourglass}>
                        spinner...

                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
