const startField = () => {
  return {
    type: "INIT_FIELD",
  };
};
const currentStep = (event) => {
  return {
    type: "CURRENT_STEP",
    index: event.target.getAttribute("data"),
    isClicked: true,
  };
};
const clicksCount = () => {
  return { type: "CLICKS_COUNT" };
};
const changePlayer = () => {
  return {
    type: "CHANGE_PLAYER",
  };
};

const resumeGame = () => {
  return {
    type: "RESUME_GAME",
  };
};

const newGame = () => {
  console.log("qwe");
  return {
    type: "NEW_GAME",
  };
};
const gameEnd = () => {
  return { type: "GAME_END" };
};
export {
  startField,
  currentStep,
  changePlayer,
  clicksCount,
  resumeGame,
  newGame,
  gameEnd,
};
