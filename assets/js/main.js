// Html elments
var myModel = document.querySelector('.my-modal');
var statusInput = document.getElementById('status');
var closebtn = document.getElementById('closebtn');
var addBtn = document.getElementById('addBtn');
var statusInput = document.getElementById('status');
var categoryInput = document.getElementById('category');
var titleInput = document.getElementById('title');
var descriptionInput = document.getElementById('description');
var addtask = document.getElementById('addTask');
var nextContainer = document.getElementById('nextContainer');
var inProgressContainer = document.getElementById('inProgressContainer');
var doneContainer = document.getElementById('doneContainer');
var counterone = document.getElementById('counterone');
var countertwo = document.getElementById('countertwo');
var counterthree = document.getElementById('counterthree');
var updateBtn = document.getElementById('updateBtn');
var searchInput = document.getElementById('search');
var Sunicon = document.getElementById('Sunicon');
var Moonicon = document.getElementById('Moonicon');
var root = document.querySelector(":root");
var grid = document.getElementById('grid');
var bars = document.getElementById('bars');
var containerone = document.getElementById("containerone");
var containertwo = document.getElementById('containertwo');
var containerthree = document.getElementById('containerthree');
//  app variables 
var taskList = [];
var number;
var nextcount = 0;
var progresscount = 0;
var donecount = 0;

if (localStorage.getItem("tasks") !== null) {
    taskList = JSON.parse(localStorage.getItem("tasks"));
    displayAlltasks();
}

// functions 
function addTask() {
    var task = {
        category: categoryInput.value,
        description: descriptionInput.value,
        status: statusInput.value,
        title: titleInput.value,
    }
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks(taskList.length - 1);
    myModel.classList.add("d-none");
}

function displayTasks(index) {
    var htmlContainer = `

<div class="task mt-3">
       <h3 class="text-capitalize">${taskList[index].title}</h3>
       <p class="description text-capitalize">${taskList[index].description}</p>
       <h4 class="category  text-capitalize">${taskList[index].category}</h4>
       <ul class="task-options list-unstyled d-flex gap-3 fs-5 m-0">
         <li><i class="bi bi-pencil-square" onclick="getTask(${index})"></i></li>
         <li><i class="bi bi-trash-fill" onclick="deleteTask(${index})" ></i></li>
       </ul>
   </div>
`
    if (taskList[index].status === "nextUp") {
        nextContainer.innerHTML += htmlContainer;
        nextcount++;
        counterone.innerHTML = nextcount;

    }
    else if (taskList[index].status === "inProgress") {
        inProgressContainer.innerHTML += htmlContainer;
        progresscount++;
        countertwo.innerHTML = progresscount;

    }
    else if (taskList[index].status === "done") {
        doneContainer.innerHTML += htmlContainer;
        donecount++;
        counterthree.innerHTML = donecount;

    }

}
function displayAlltasks() {
    for (var i = 0; i < taskList.length; i++) {
        displayTasks(i);
    }

}
function deleteTask(i) {
    taskList.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    nextContainer.innerHTML = "";
    inProgressContainer.innerHTML = "";
    doneContainer.innerHTML = "";
    displayAlltasks();


}
function getTask(p) {
    number = p ; 
    myModel.classList.remove("d-none");
    addtask.classList.add("d-none");
    updateBtn.classList.remove('d-none');
    statusInput.value = taskList[p].status;
    categoryInput.value = taskList[p].category;
    titleInput.value = taskList[p].title;
    descriptionInput.value = taskList[p].description;
}
function UpdateTask (number)
{
    taskList[number].status = statusInput.value ; 
    taskList[number].category = categoryInput.value;
    taskList[number].title = titleInput.value;
    taskList[number].description = descriptionInput.value;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    nextContainer.innerHTML = "";
    inProgressContainer.innerHTML = "";
    doneContainer.innerHTML = "";
    myModel.classList.add("d-none");
    displayAlltasks();
   
    

}
function searchTask ()
{
  
    var term = searchInput.value;
    nextContainer.innerHTML = "";
    inProgressContainer.innerHTML = "";
    doneContainer.innerHTML = "";
    for(var i =0; i < taskList.length;i++)
        {
           if(taskList[i].title.toLowerCase().includes(term.toLowerCase()))
            {
                displayTasks(i);
            } 
        }
}
function changeMode ()
{

}

// events 

addBtn.addEventListener('click', function () {
    myModel.classList.remove('d-none');

})
closebtn.addEventListener('click', function () {
    myModel.classList.add('d-none');
    addtask.classList.remove("d-none");
    updateBtn.classList.add('d-none');
})
addtask.addEventListener('click', function () {
    addTask();

})

updateBtn.addEventListener('click' , function()
{
    UpdateTask(number)
})

Sunicon.addEventListener('click', function(){
    Sunicon.classList.add('d-none');
    Moonicon.classList.remove('d-none');
    root.style.setProperty("--main-black", "#f1f1f1");
    root.style.setProperty("--sec-black", "#ddd");
    root.style.setProperty("--text-color", "#222");
    root.style.setProperty("--gray-color", "#333");
    root.style.setProperty("--mid-gray", "#f1f1f1");
  
})
Moonicon.addEventListener("click", function()
{
    Moonicon.classList.add('d-none');
    Sunicon.classList.remove('d-none');
    root.style.setProperty("--main-black", "#0d1117");
    root.style.setProperty("--sec-black", "#161b22");
    root.style.setProperty("--text-color", "#a5a6a7");
    root.style.setProperty("--gray-color", "#dadada");
    root.style.setProperty("--mid-gray", "#474a4e");
})

bars.addEventListener('click', function()
{
    grid.classList.remove("border")
    bars.classList.add("border");
    containerone.classList.replace("col-lg-4","col-lg-12");
    containertwo.classList.replace("col-lg-4","col-lg-12");
    containerthree.classList.replace("col-lg-4","col-lg-12");
    containerone.classList.replace("col-md-6","col-md-12");
    containertwo.classList.replace("col-md-6","col-md-12");
    containerthree.classList.replace("col-md-6","col-md-12");

})
grid.addEventListener('click', function()
{
    grid.classList.add("border")
    bars.classList.remove("border");
    containerone.classList.replace("col-lg-12","col-lg-4");
    containertwo.classList.replace("col-lg-12","col-lg-4");
    containerthree.classList.replace("col-lg-12","col-lg-4");
    containerone.classList.replace("col-md-12","col-md-6");
    containertwo.classList.replace("col-md-12","col-md-6");
    containerthree.classList.replace("col-md-12","col-md-6");
})
