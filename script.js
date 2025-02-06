let draggedElement = null;

function drag(ev) {
    // Store the dragged element reference
    draggedElement = ev.target;
    // Allow data transfer to happen
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    // Prevent default to allow drop
    ev.preventDefault();
}

function drop(ev) {
    // Prevent default action (open as link for some elements)
    ev.preventDefault();

    const targetElement = ev.target;

    // Make sure the drop is only on a valid div (not within a child div)
    if (targetElement.classList.contains("image")) {
        // Get the background image of both the dragged and target divs
        const draggedImage = draggedElement.style.backgroundImage;
        const targetImage = targetElement.style.backgroundImage;

        // Swap the images between dragged and target divs
        draggedElement.style.backgroundImage = targetImage;
        targetElement.style.backgroundImage = draggedImage;
    }
}
