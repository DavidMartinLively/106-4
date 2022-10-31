var iconImportant = "important";
var iconNonImportant = "notImportant";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  if (isImportant) {
    //shouldnt be important
    $("#iImportant").removeClass(iconImportant);
    $("#iImportant").addClass(iconNonImportant);
    isImportant = false;
  } else {
    //should be important
    $("#iImportant").removeClass(iconNonImportant);
    $("#iImportant").addClass(iconImportant);
    isImportant = true;
  }
}

function toggleForm() {
  if (isVisible) {
    $(".form").hide();
    isVisible = false;
  } else {

    $(".form").show();
    isVisible = true;
  }
}
function saveTask() {
  let title = $("txtTitle").val();
  let desc = $("txtDescription").val();
  let priority = $("#selPriority").val();
  let dueDate = $("#selDueDate").val();
  let contact = $("#txtContact").val();
  let participants = $("#txtParticipants").val();
  let color = $("#selColor").val();

  let task = new Task(isImportant, title, desc, priority, dueDate, contact, participants, color)

  console.log(title, desc, priority, dueDate, contact, participants, color);
  console.log(task);
  display(task);
  clearForm();
}

function clearForm(){
  $("txtTitle").val("");
  $("txtDescription").val("");
  $("#selPriority").val("");
  $("#selDueDate").val("");
  $("#txtContact").val("");
  $("#txtParticipants").val("");
  $("#selColor").val("#000000");



}


function display(task){
  console.log(task.title);
  
  let syntax = `<div class ="task" style="border-color:${task.color}">
  <div class="head">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
    </div>

    <div class="middle">
      <label>${task.priority}</label>
      <label>${task.dueDate}</label>
    </div>

    <div class="tail" style="background-color: ${task.color}">
      <label>${task.contact}</label>
      <label>${task.participants}</label>
    </div>
  </div>`;

  $('#task-list').appent(syntax);
}

function testGet() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net/",
  })
}


function fetchTasks(){
$.ajax({
  type:"GET",
  url:"http://fsdiapi.azurewebsites.net/api/tasks",
  success: function(res){
    let list = JSON.parse(res);
    for(let i=0;i<list.length;i++){
      let task = list[i];
      if(task.developer === "David"){
      display(task);
      }
    }
  },
  error: function(details){
    console.log(details);
  }

});
}
function init() {
  console.log("Task manager");

  //load data
  fetchTasks();

  //hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(toggleImportant);
  $("#btnHideForm").click(toggleForm);
}

window.onload = init;

/**
 *
 * create button
 *  create a variable to store the state
 * when the bitton is clicked call a toggleForm
 * hide/ show inside the toggleForm rn
 */
