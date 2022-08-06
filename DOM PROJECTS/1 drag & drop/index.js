const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");
console.log(draggables);
console.log(containers);

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", function (event) {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    const draggableElement = getDragAfterElement(container, e.clientY);
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    container.append(draggable);
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  draggableElements.reduce();
}
