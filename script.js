const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== ""){

        const li = document.createElement("li");
        li.textContent = taskText;

        li.style.cursor = "pointer";

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.background = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "3px 6px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.borderRadius = "3px";

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";

    }
});