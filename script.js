let draggedElement = null; // Store the dragged element reference

function drag(event) {
    draggedElement = event.target; // Store the dragged element reference
    event.dataTransfer.setData("text/plain", event.target.id); // Store the ID of dragged element
    event.dataTransfer.effectAllowed = "move";
}

function drop(event) {
    event.preventDefault();
    
    let targetElement = event.target.closest(".image"); // Ensure we get the correct div

    if (draggedElement && targetElement && draggedElement !== targetElement) {
        // Swap the background images
        let temp = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
        targetElement.style.backgroundImage = temp;
    }
}

function allowDrop(event) {
    event.preventDefault(); // Allow dropping
}

// Attach event listeners dynamically
document.querySelectorAll(".image").forEach(div => {
    div.addEventListener("dragstart", drag);
    div.addEventListener("dragover", allowDrop);
    div.addEventListener("drop", drop);
});
