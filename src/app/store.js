import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "../features/Auth/reducer";
import productReducer from "../features/Products/reducer";
import cartReducer from "../features/Cart/reducer";

import thunk from "redux-thunk";
//buat komposer enhancer untuk menghubungkan dengan chrome Devtools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//gabung reducer
const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});
//5. buat store, dan gunakan composerEnchancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);
//6. export store
export default store;
