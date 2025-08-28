const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== ""){

        const li = document.createElement("li");
        li.textContent = taskText;

        taskList.appendChild(li);

        taskInput.value = "";
    }
});