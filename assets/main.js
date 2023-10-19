const taskBtn = document.getElementById('task-btn');
let taskEntry = document.getElementById('new-task-entry')
let displayTask = document.getElementById('task-text');
let displayTaskContainer = document.getElementById('display-task-container');

taskBtn.addEventListener('click', function () {
    let userTaskEntry = taskEntry.value;
    console.log(userTaskEntry);

    // Create a new <span> element for the checkmark icon
    let checkmarkSpan = document.createElement('span');
    checkmarkSpan.innerHTML = '<i class="fa-solid fa-check"></i>';

    let xmarkSpan = document.createElement('span');
    xmarkSpan.innerHTML = '<i class="fa-solid fa-xmark"></i>'

    // Create a new <p> element for the task entry
    let newTaskParagraph = document.createElement('p');
    newTaskParagraph.appendChild(document.createTextNode(userTaskEntry)); // Append the task entry
    newTaskParagraph.appendChild(checkmarkSpan); // Append the checkmark icon
    newTaskParagraph.appendChild(xmarkSpan); // append the x mark button

    xmarkSpan.addEventListener('click', function () {
        newTaskParagraph.remove();
    });

    // Append the <p> element to the container
    displayTask.appendChild(newTaskParagraph);

    // Reset taskEntry to empty on click
    taskEntry.value = "";

    // Remove the "hide" class from displayTask
    displayTaskContainer.classList.remove('hide');
});