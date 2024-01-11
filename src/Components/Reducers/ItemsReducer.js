const initialState = {
    items_name: "All Items"
}

export default function items_name(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "SetItems":
            return { ...state, items_name: payload }
        case "ResetItems":
            return { ...state, items_name: "All Items" }
        default:
            return state;
    }
}