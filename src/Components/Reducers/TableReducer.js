const initialState = {
    table_number: null
}

export default function TableReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "SetTableNumber":
            return { ...state, table_number: payload }
        case "ResetTableNumber":
            return { ...state, table_number: null }
        default:
            return state
    }
}