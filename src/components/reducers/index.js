const initialState = {
  isSound: localStorage.getItem("isSound") || true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOUND_ON":
      state.isSound = !state.isSound;
      localStorage.setItem("isSound", state.isSound);
      return state;

    default:
      return state;
  }
};

export default reducer;
