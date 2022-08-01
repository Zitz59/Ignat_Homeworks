import {UserType} from '../HW8';

type SortByNameUpType = ReturnType<typeof sortByNameUp>
type SortByNameDownType = ReturnType<typeof sortByNameDown>
type checkByAdultType = ReturnType<typeof checkByAdult>

type HomeworkReducerType =
    | SortByNameUpType
    | SortByNameDownType
    | checkByAdultType

export const homeWorkReducer = (state: Array<UserType>, action: HomeworkReducerType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort-up': {
            return [...state].sort((a, b) => a.name.localeCompare(b.name))
            // return state.slice().sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
        }
        case 'sort-down': {
            return [...state].sort((a, b) => a.name.localeCompare(b.name)).reverse()
        }
        case 'check': {
            return state.filter((u => u.age >= action.payload))
        }
        default:
            return state
    }
}

// actions
export const sortByNameUp = () => {
    return {
        type: 'sort-up',
        payload: 'up'
    } as const
}
export const sortByNameDown = () => {
    return {
        type: 'sort-down',
        payload: 'down'
    } as const
}
export const checkByAdult = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const
}