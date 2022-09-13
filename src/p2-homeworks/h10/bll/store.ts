import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from 'redux'
import {backgroundReducer} from './backgroundColorReducer';


const reducers = combineReducers({
    loading: loadingReducer,
    backgroundColor:backgroundReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
// export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector

// @ts-ignore
window.store = store // for dev
