const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== ""){

        const li = document.createElement("li");
        li.textContent = taskText;
    }
});
function loadTasks(){
    const stored = localStorage.getItem("tasks");
    if (stored) {
        const tasks = JSON.parse(stored);
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.text;
            if (task.completed) li.classList.add("completed");
        

            li.style.cursor = "pointer";

            li.addEventListener("click", () => {
                li.classList.toggle("completed");
                saveTasks();
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
            saveTasks();
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        saveTasks();

        taskInput.value = "";

    
         });
        
    }
}

function saveTasks(){
    const tasks = [];
    document.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadTasks();