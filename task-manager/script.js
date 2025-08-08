const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add delete functionality to buttons
function addDeleteFunctionality() {
  const deleteButtons = document.querySelectorAll(".delete-task");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.parentNode.remove();
    });
  });
}

// Add delete functionality to existing buttons
addDeleteFunctionality();

// Add task on Enter key press
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      // Create new task element
      const newTask = document.createElement("li");
      newTask.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="right-controls">
          <input class="checkbox" type="checkbox" />
          <span class="delete-task">x</span>
        </div>
      `;
      
      // Add hr separator
      const hr = document.createElement("hr");
      
      // Append to task list
      taskList.appendChild(newTask);
      taskList.appendChild(hr);
      
      // Clear input
      taskInput.value = "";
      
      // Add delete functionality to the new button
      addDeleteFunctionality();
    }
  }
});
