import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let value = e.currentTarget.value
        const replacedValue = value.replace(/\d/,  '')
        setName(replacedValue)

        // need to fix

        //сделать проверку на ошибку
    }
    const addUser = () => {
        if (!name.trim()) {
            alert('input is empty')
            return
        }
        addUserCallback(name);
        alert(`Hello  ${name}!`)
        //alert(`${error} is not literal! Please use literals only `)// need to fix
    }

    const totalUsers = users.length // need to fix использозовать length, длина массива

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
