import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import Slider from '@mui/material/Slider';
import {Box} from '@mui/material';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number
    minValue?: number,
    maxValue?: number,
    disabled?: boolean
};

export const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange, value, minValue, maxValue, disabled,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box sx={{width: 290}}>
                <Slider
                    getAriaLabel={() => 'range'}
                    min={minValue ? minValue : 0}
                    max={maxValue}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    color={'secondary'}
                />
            </Box>
        </>
    )
}

export default SuperRange
