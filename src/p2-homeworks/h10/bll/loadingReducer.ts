const initialState = {
    isLoading: false
}

export const loadingReducer = (state: initialStateType = initialState, action: LoadingActionType) => { // fix any
    switch (action.type) {
        case 'SET-LOADING':
            console.log('action', action)
            return {...state, isLoading: action.loading}
        default:
            return state
    }
}

//actions
export const loadingAC = (loading: boolean) => ({type: 'SET-LOADING', loading} as const) // fix any
//types
type LoadingActionType = ReturnType<typeof loadingAC>
export type initialStateType = typeof initialState