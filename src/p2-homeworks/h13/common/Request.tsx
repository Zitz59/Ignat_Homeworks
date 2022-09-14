import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import React from 'react';
import s from './Request.module.css'


export const Request = () => {
  return(
      <div className={s.requestBlock}>
          <SuperButton>Send</SuperButton>
          <SuperCheckbox/>
      </div>
  )
}