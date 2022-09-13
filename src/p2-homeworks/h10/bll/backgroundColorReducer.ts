const initialState = {
    color: 'dark'
}

export const backgroundReducer = (state: initialStateType = initialState, action: ChangeBackgroundActionType) => { // fix any
    switch (action.type) {
        case 'CHANGE-BACKGROUND':
            return {...state,color: action.color}
        default:
            return state
    }
}

//actions
export const changeBackgroundAC = ( color:string) => ({type: 'CHANGE-BACKGROUND',color} as const) // fix any
//types

type ChangeBackgroundActionType = ReturnType<typeof changeBackgroundAC>
export type initialStateType = typeof initialState

