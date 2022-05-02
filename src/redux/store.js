import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import resumeReducer from "./resumeRecucer";
import vacancyReducer from "./vacancyReducer";

const roootReducer = combineReducers({
  vacancy: vacancyReducer,
  resume: resumeReducer,
});

export const store = createStore(
  roootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
