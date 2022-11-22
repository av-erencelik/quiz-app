import { configureStore } from "@reduxjs/toolkit";
import scoresReducer from "./scores";
import choicesReducer from "./choices";
const store = configureStore({
  scores: scoresReducer,
  choices: choicesReducer,
});
export default store;
