let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;
//sets coords

isMouseDown = false;

const dragabbleDiv = document.getElementById('lilguy')

dragabbleDiv.addEventListener('mousedown', (e) =>{
    isMouseDown = true;
    offsetX = dragabbleDiv.offsetLeft - e.clientX;
    offset = dragabbleDiv.offsetTop - e.clientY;

});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    mouseX = e.clientX + offsetX;
    mouseY = e.clientY + offsetY;
    dragabbleDiv.style.top = mouseY + "px"
    dragabbleDiv.style.left = mouseX + "px"
});
//direction of where it will be dragged
document.addEventListener('mouseup', (e) => {
    isMouseDown = false;

});

//won't affect item if not held