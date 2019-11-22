import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const middleware = [];

if(process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); 
export const persistor = persistStore(store);
