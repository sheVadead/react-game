const setDefaultColor = (input) => {
  input.current.childNodes.forEach((item) => {
    if (
      item.textContent.toLowerCase() ===
      localStorage
        .getItem(`${input.current.id === "X-color" ? "xColor" : "oColor"}`)
        .toLowerCase()
    ) {
      item.selected = true;
    }
  });
};
const blockClicks = () => {
  if (!document.body.classList.contains("block-clicks")) {
    document.body.classList.add("block-clicks");
  }
};

export { setDefaultColor, blockClicks };
