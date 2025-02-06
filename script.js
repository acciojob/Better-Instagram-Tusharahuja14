let draggedElement = null; // Stores the element being dragged

document.querySelectorAll(".image").forEach((div) => {
    div.addEventListener("dragstart", (event) => {
        draggedElement = event.target; // Store reference
        event.dataTransfer.effectAllowed = "move"; // Indicate movement
    });

    div.addEventListener("dragover", (event) => {
        event.preventDefault(); // Allow drop event
    });

    div.addEventListener("drop", (event) => {
        event.preventDefault();

        let targetElement = event.target; // The element being dropped onto

        if (draggedElement && targetElement && draggedElement !== targetElement) {
            // Swap background images
            let tempBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
            targetElement.style.backgroundImage = tempBg;
        }
    });
});
