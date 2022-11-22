import { configureStore } from "@reduxjs/toolkit";
import scoresReducer from "./scores";
import choicesReducer from "./choices";
const store = configureStore({
  reducer: { scores: scoresReducer, choices: choicesReducer },
});
export default store;
