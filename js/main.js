// Variables

const input = document.getElementById("note");
const addTask = document.getElementById("addTask");
const tasksContent = document.querySelector(".tasks-content");
const noTask = document.querySelector(".no-task");
const taskBox = document.querySelector(".task-box");
const deleteIcon = document.querySelector(".delete");
const editIcon = document.querySelector(".edit")
const count = document.querySelector(".count span");
const completed = document.querySelector(".completed span")
const checked = document.querySelectorAll('.action input[type="checkbox"]:checked')
const notes = [];


// input focus automatically
window.addEventListener("load", () => {
    input.focus()
    calculateTasks()
})

addTask.addEventListener("click", () => {
    const note = input.value;

    if(!note){
        alert("Please enter note")
    } else{
    // action container with checkbox and input
    const taskCheck = document.createElement("input");
    taskCheck.type = "checkbox"
    const task = document.createElement("input");
    task.type = "text"
    task.setAttribute("readonly", "readonly")
    task.classList.add("task-box")
    task.value = note
    const action = document.createElement("div")
    action.classList.add("action")
    action.appendChild(taskCheck)
    action.appendChild(task)

    // btns container with delete and edit icons
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular")
    editIcon.classList.add("fa-pen-to-square")
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-regular")
    deleteIcon.classList.add("fa-trash-can")

    const btns = document.createElement("div")
    btns.classList.add("btns")
    btns.appendChild(editIcon)
    btns.appendChild(deleteIcon)

    // container for btns and actions
    const noteContainer = document.createElement("div");
    noteContainer.classList.add("noteContainer");
    noteContainer.appendChild(action);
    noteContainer.appendChild(btns)

    // puting container inside taskcontent
    tasksContent.appendChild(noteContainer)
    
    // adding notes inside array for local storage
    notes.push(note)
    localStorage.setItem("data", JSON.stringify(notes))

    // delete button
    deleteIcon.addEventListener("click", () => {
        noteContainer.remove()
        calculateTasks()
        // Find the index of the deleted note in the `notes` array
        const index = notes.indexOf(task.value);

        // Remove the note from the array
        notes.splice(index, 1);

        // Update local storage with the modified `notes` array
        localStorage.setItem("data", JSON.stringify(notes));
        })

    // edit button
    editIcon.addEventListener("click", () => {
        if(editIcon.classList.contains("fa-pen-to-square")){
            editIcon.classList.remove("fa-pen-to-square")
            editIcon.classList.add("fa-floppy-disk")
            task.removeAttribute("readonly")
        } else{
            editIcon.classList.remove("fa-floppy-disk")
            editIcon.classList.add("fa-pen-to-square")
            task.setAttribute("readonly", "readonly")
        }
        localStorage.setItem("data" , JSON.stringify(notes));
    })


    // clear input
    input.value = ``;
    }

    // calculate tasks
    calculateTasks()
})

const storeData = JSON.parse(localStorage.getItem("data")) || [];

// display the store data on the website
storeData.forEach( note => {

    // action container with checkbox and input
    const taskCheck = document.createElement("input");
    taskCheck.type = "checkbox"
    const task = document.createElement("input");
    task.type = "text"
    task.setAttribute("readonly", "readonly")
    task.classList.add("task-box")
    task.value = note;
    const action = document.createElement("div");
    action.classList.add("action")
    action.appendChild(taskCheck)
    action.appendChild(task)

    // btns container with delete and edit icons
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular")
    editIcon.classList.add("fa-pen-to-square")
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-regular")
    deleteIcon.classList.add("fa-trash-can")

    const btns = document.createElement("div")
    btns.classList.add("btns")
    btns.appendChild(editIcon)
    btns.appendChild(deleteIcon)

    // container for btns and actions
    const noteContainer = document.createElement("div")
    noteContainer.classList.add("noteContainer")
    noteContainer.appendChild(action);
    noteContainer.appendChild(btns)

    // puting container inside taskcontent
    tasksContent.appendChild(noteContainer)

    // delete button
    deleteIcon.addEventListener("click", () => {
        noteContainer.remove()
        calculateTasks()
        // Find the index of the deleted note in the `notes` array
        const index = notes.indexOf(task.value);

        // Remove the note from the array
        notes.splice(index, 1);

        // Update local storage with the modified `notes` array
        localStorage.setItem("data", JSON.stringify(notes));
        })

    // edit button
    editIcon.addEventListener("click", () => {
        if(editIcon.classList.contains("fa-pen-to-square")){
            editIcon.classList.remove("fa-pen-to-square")
            editIcon.classList.add("fa-floppy-disk")
            task.removeAttribute("readonly")
        } else{
            editIcon.classList.remove("fa-floppy-disk")
            editIcon.classList.add("fa-pen-to-square")
            task.setAttribute("readonly", "readonly")
        }
        localStorage.setItem("data" , JSON.stringify(notes));
    })
})




const clearInput = () => input.value = ``;

const calculateTasks = () => count.innerHTML = document.querySelectorAll(".noteContainer").length;




// document.querySelectorAll('input[type="checkbox"]').addEventListener('click', () => {
//     completed.innerHTML = document.querySelectorAll('input[type="checkbox"]:checked').length
// })

const allCheckBox = document.querySelectorAll('input[type="checkbox"]')

allCheckBox.forEach((each) => {
    each.addEventListener('click', () => {
        completed.innerHTML = document.querySelectorAll('input[type="checkbox"]:checked').length
    })
})






