// This shows the HTML page in "index.html".
figma.showUI(__html__);

// This monitors the selection changes and posts the selection to the UI
figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  console.log(selection);
});
