const soundOn = () => {
  return { type: "SOUND_ON" };
};
const soundOff = () => {
  return { type: "SOUND_OFF" };
};

const colorChange = (payload) => {
  return { type: "COLOR_CHANGE", payload };
};

const colorChangeO = (payload) => {
  return { type: "COLOR_CHANGE_O", payload };
};
export { soundOn, soundOff, colorChange, colorChangeO };
