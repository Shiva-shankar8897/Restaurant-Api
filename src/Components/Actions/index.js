export const settablenumber = (value) => async dispatch => {
    dispatch({
        type: "SetTableNumber",
        payload: value
    })
}

export const resettablenumber = () => async dispatch => {
    dispatch({
        type: "ResetTableNumber"
    })
}

export const setitems = (value) => async dispatch => {
    dispatch({
        type: "SetItems",
        payload: value
    })
}

export const resetitems = () => async dispatch => {
    dispatch({
        type: "ResetItems"
    })
}

export const addorder = (id, name, price, table_number,url) => async dispatch => {
    dispatch({
        type: "AddOrder",
        payload: {
            id: id,
            name: name,
            price: price,
            table_number: table_number,
            url:url,
        }
    })
}

