import React, {useState} from 'react'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'
import {SuperRange} from './common/c7-SuperRange/SuperRange';

function HW11() {
    const minValue = 0
    const maxValue = 100

    const [value1, setValue1] = useState<number>(minValue)
    const [value2, setValue2] = useState<number>(maxValue)

    const onChangeRange = ([value1, value2]: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div className={s.superRangeBlock}>
                <span className={s.spanStyle}>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.superDoubleSpanBlock}>
                <span className={s.spanStyle}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.spanStyle2}>{value2}</span>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
