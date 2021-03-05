const soundOn = () => {
  return { type: "SOUND_ON" };
};
const soundOff = () => {
  return { type: "SOUND_OFF" };
};

const colorChange = (payload) => {
  return { type: "COLOR_CHANGE", payload };
};
export { soundOn, soundOff, colorChange };
