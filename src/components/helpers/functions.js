const setDefaultColor = (input) => {
  console.log(input.current.id);
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

export { setDefaultColor };
