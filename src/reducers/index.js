let initialState = {
  initField: [
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
  ],
  currentSigil: "O",
  clicks: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_STEP":
      state.initField[action.index] = {
        sigil: state.currentSigil,
        isClicked: action.isClicked,
      };
      localStorage.setItem("savedGame", JSON.stringify(state));
      return state;

    case "CLICKS_COUNT":
      state.clicks = state.clicks + 1;
      return state;

    case "CHANGE_PLAYER":
      state.currentSigil = state.currentSigil === "X" ? "O" : "X";
      return state;

    case "RESUME_GAME":
      console.log("RESUME_GAME");
      state = JSON.parse(localStorage.getItem("savedGame"));
      return state;

    case "NEW_GAME":
      resetState();
      state = initialState;
      return state;

    default:
      return state;
  }
};
const resetState = () => {
  initialState = {
    initField: [
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
    ],
    currentSigil: "O",
    clicks: 0,
  };
  console.log(initialState);
};
export default reducer;
