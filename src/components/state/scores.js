import { createSlice } from "@reduxjs/toolkit";

const initialScoresState = {
  bestScore: 0,
  score: 0,
  questionNumber: 0,
  wrongAnswers: 0,
};

const scoresSlice = createSlice({
  name: "scores",
  initialState: initialScoresState,
  reducers: {
    setBestScore(state, action) {
      state.bestScore = action.payload;
    },
    setScore(state, action) {
      state.score = action.payload;
    },
    setQuestionNumber(state, action) {
      state.questionNumber = action.payload;
    },
    setWrongAnswers(state, action) {
      state.wrongAnswers = action.payload;
    },
  },
});

export const scoresActions = scoresSlice.actions;
export default scoresSlice.reducer;
