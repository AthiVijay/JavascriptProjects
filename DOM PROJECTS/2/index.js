
function createCircle(){
  console.log('Entered Here');
  const item = document.createElement("div");
  console.log(item);
  return item;
}

function setDraggableTrue(element){
  element.setAttribute('draggable', 'true')
}

function makeElementPositionAbsolute(element){
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



document.addEventListener('click', function (evt) {

  if(evt.detail === 3){

    console.log('Triple click happened');
    const circle = createCircle();
    console.log('Done One',circle);
    setDraggableTrue(circle);
    console.log('Done Two',circle);

    makeElementPositionAbsolute(circle);
    // makeElementDraggable(circle);   

    circle.ondrag = function (event) {
      setElementCoordinatesFromEvent(this, event);
    };
    
    circle.ondragend = function (event) {
      setElementCoordinatesFromEvent(this, event);
    };
    
    circle.ondrag = function (event) {
      setElementCoordinatesFromEvent(this, event);
    };
    
    }

}
);
