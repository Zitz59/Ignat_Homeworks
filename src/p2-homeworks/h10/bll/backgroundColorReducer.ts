const initialState = {
    theme: 'dark'
}

export const backgroundReducer = (state: initialStateType = initialState, action: ChangeBackgroundActionType) => { // fix any
    switch (action.type) {
        case 'CHANGE-BACKGROUND':
            return {...state,theme: action.theme}
        default:
            return state
    }
}

//actions
export const changeBackgroundAC = ( theme:string) => ({type: 'CHANGE-BACKGROUND',theme} as const) // fix any
//types

type ChangeBackgroundActionType = ReturnType<typeof changeBackgroundAC>
export type initialStateType = typeof initialState

