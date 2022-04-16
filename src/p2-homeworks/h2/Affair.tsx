import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'


type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}
//передать идентификатор дела
function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>

            <span className={s.id}>{props.affair._id}</span>
            <span className={s.name}>{props.affair.name}</span>
            <span className={s.priority}>{props.affair.priority}</span>


            <div>
                <button onClick={deleteCallback} className={s.deleteButton}>X</button>
            </div>

        </div>
    )
}

export default Affair;
