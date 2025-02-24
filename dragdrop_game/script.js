let status = false;
let statusDiv = document.querySelector('.status')

document.querySelectorAll(".fruit").forEach(img => {
    img.addEventListener("dragstart", drag);
});

document.querySelectorAll(".faded").forEach(img => {
    img.addEventListener("dragover", allowDrop);
    img.addEventListener("drop", drop);
});

function allowDrop(event) {
    event.preventDefault();
    status = true;
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    let draggedElement = event.target;
}

function drop(event) {
    event.preventDefault();
    let draggedId = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(draggedId);

    if (draggedElement.name === event.target.name) {

        event.target.classList.remove("faded");
        event.target.style.pointerEvents = "none";

        draggedElement.style.pointerEvents = "none";
        draggedElement.classList.add("faded");
        showToast("Barakalla!", "success");
    } else {
        draggedElement.classList.remove("faded");
        draggedElement.style.pointerEvents = "none";

        event.target.classList.add("faded");

        showToast("Qayta urinib ko`ring!", "error");
    }
}