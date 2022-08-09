let [element] = document.getElementsByClassName("circle");
element.setAttribute("draggable", "true");
element.style.position = "absolute";

function setElementCoordinatesFromEvent(element, event) {
  element.style.left = event.pageX + "px";
  element.style.top = event.pageY + "px";
}

element.ondrag = function (event) {
  setElementCoordinatesFromEvent(this, event);
};

element.ondragend = function (event) {
  setElementCoordinatesFromEvent(this, event);
};

element.ondrag = function (event) {
  setElementCoordinatesFromEvent(this, event);
};

const [btn] = document.getElementsByClassName('btn');

btn.addEventListener('click', function(){
  // console.log('Button is clicked');
  console.log('Triple click');
  const item = document.createElement("div");
  item.classList.add('circle');
  item.setAttribute("draggable", "true");
  item.style.position = "absolute";

  item.ondragend = function (event) {
    setElementCoordinatesFromEvent(this, event);
  };
  
  item.ondrag = function (event) {
    setElementCoordinatesFromEvent(this, event);
  };

  document.body.appendChild(item);



});


