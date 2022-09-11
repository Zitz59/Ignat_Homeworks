import React from 'react'
import Slider from '@mui/material/Slider';
import {Box} from '@mui/material';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    minValue?: number
    maxValue?: number
    disabled?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value, minValue, maxValue, disabled
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <>
            <Box sx={{width: 290}}>
                <Slider
                    getAriaLabel={() => 'range'}
                    min={minValue ? minValue : 0}
                    max={maxValue ? maxValue : 100}
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    valueLabelDisplay="auto"
                    disableSwap={true}
                    color={'secondary'}
                />
            </Box>

        </>
    )
}

export default SuperDoubleRange
