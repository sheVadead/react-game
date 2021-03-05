const initialState = {
  isSound: JSON.parse(localStorage.getItem("isSound")),
  xColor: localStorage.getItem("xColor") || "purple",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOUND_ON":
      state.isSound = true;
      localStorage.setItem("isSound", true);
      return state;
    case "SOUND_OFF":
      state.isSound = false;
      localStorage.setItem("isSound", false);
      return state;
    case "COLOR_CHANGE":
      state.xColor = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
