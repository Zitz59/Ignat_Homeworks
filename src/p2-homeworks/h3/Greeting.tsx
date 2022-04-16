import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${error?s.error:s.zbs} ${s.inputForever}`
    // need to fix with (?:) написать тернарный оператор для функции для опр класса input

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} className={s.greetingsButton}>add</button>
            <span className={s.totalUsersCounter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
