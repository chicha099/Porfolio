const initialState = {
    len: "EN"
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_LEN':
            return {
                ...state,
                len: action.payload
            }
            default: return state
    }
}