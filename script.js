const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// Add new task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText, pendingList, false);
        taskInput.value = "";
    }
});

function addTask(text, list, completed) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = text;
    taskSpan.classList.add("task-text");

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("task-time");
    timeSpan.textContent = completed
        ? `Completed: ${new Date().toLocaleString()}`
        : `Added: ${new Date().toLocaleString()}`;

    // Buttons
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        li.remove();
        addTask(text, completedList, true);
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit your task:", text);
        if (newTask && newTask.trim() !== "") {
            taskSpan.textContent = newTask.trim();
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✗";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(timeSpan);

    if (!completed) li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);
}
