import { createSlice } from "@reduxjs/toolkit";

const initialChoicesState = {
  isEntertainment: false,
  isTopicChose: false,
  isDifficultyChose: false,
  topic: "",
  difficulty: "",
};
const choicesSlice = createSlice({
  name: "choices",
  initialState: initialChoicesState,
  reducers: {
    changeEntertainment(state) {
      state.isEntertainment = !state.isEntertainment;
    },
    changeIsTopicChose(state) {
      state.isTopicChose = !state.isTopicChose;
    },
    changeIsDifficultyChose(state) {
      state.isDifficultyChose = !state.isTopicChose;
    },
    setTopic(state, action) {
      state.topic = action.payload;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
  },
});

export const choicesActions = choicesSlice.actions;
export default choicesSlice.reducer;
