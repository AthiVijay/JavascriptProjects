let [element] = document.getElementsByClassName("circle");
element.setAttribute("draggable", "true");
element.style.position = "absolute";

function setElementCoordinatesFromEvent(element, event) {
  element.style.left = event.pageX + "px";
  element.style.top = event.pageY + "px";
}

element.ondrag = function (event) {
  console.log(this);
  setElementCoordinatesFromEvent(this, event);
};

element.ondragend = function (event) {
  console.log(this);
  setElementCoordinatesFromEvent(this, event);
};

element.ondrag = function (event) {
  console.log(this);
  setElementCoordinatesFromEvent(this, event);
};
