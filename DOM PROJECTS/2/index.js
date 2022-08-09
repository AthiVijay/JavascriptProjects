function createCircle(){
  const circle =  document.createElement('div');
  circle.classList.add('circle');
  return circle;
}

function setDraggableTrue(element){
  element.setAttribute('draggable', 'true');
}

function setPositionAbsolute(element){
  element.style.position = 'absolute';
}


function setElementCoordinatesFromEvent(element, event) {
  element.style.left = event.pageX + "px";
  element.style.top = event.pageY + "px";
}

function makeElementDraggable(element){

  element.ondrag = function (event) {
    setElementCoordinatesFromEvent(this, event);
  };
  
  element.ondragend = function (event) {
    setElementCoordinatesFromEvent(this, event);
  };
  
  element.ondrag = function (event) {
    setElementCoordinatesFromEvent(this, event);
  };

}

function addToDocument(element){
  document.body.appendChild(element);
}


const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  const circle = createCircle();
  setDraggableTrue(circle);
  setPositionAbsolute(circle);
  makeElementDraggable(circle);
  addToDocument(circle);
 });


