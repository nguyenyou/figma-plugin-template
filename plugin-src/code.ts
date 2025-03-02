function codegenMode() {
  figma.codegen.on("generate", () => {
    return [
      {
        language: "HTML",
        code: `<div class="flex items-center justify-center">
  <div class="w-10 h-10 bg-red-500"></div>
</div>`,
        title: "HTML",
      },
      {
        language: "CSS",
        code: `@import "tailwindcss";`,
        title: "CSS",
      },
    ];
  });
}

function defaultMode() {
  figma.showUI(__html__, { width: 800, height: 600 });

  figma.on("selectionchange", () => {
    const selection = figma.currentPage.selection;
    console.log(selection);
  });
}

switch (figma.mode) {
  case "default":
  case "inspect":
    defaultMode();
    break;
  // case "codegen":
  // codegenMode();
  // break;
  default:
    defaultMode();
}
