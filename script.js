
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="removeTask">Remove</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            const removeTaskButtons = document.querySelectorAll(".removeTask");
            removeTaskButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    taskList.removeChild(button.parentElement);
                });
            });
        }
    });
});
