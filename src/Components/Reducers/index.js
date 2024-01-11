import { combineReducers } from "redux";
import TableReducer from "./TableReducer";
import ItemsReducer from "./ItemsReducer";
import OrderReducer from "./OrderReducer"

const reducer = combineReducers({
    TableReducer: TableReducer,
    ItemsReducer: ItemsReducer,
    OrderReducer: OrderReducer
})

export default reducer