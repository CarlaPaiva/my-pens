var taksList = document.getElementById("taskList");
var txtTask = document.getElementById("txtTaskName");
var btnAdd = document.getElementById("btnAdd");


var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [''];

function renderList() {
	taksList.innerHTML= "";
	
	for (task of tasks){
		taskList.innerHTML += createTaskItem(task, tasks.indexOf(task));
	}
}

renderList();

function createTaskItem(task, index){
	return 
			'<li class="list__item">' +
				'<input type="checkbox"/>' +
				'<p>'+ task + '</p>'+
				'<a href="#" class="item__button">X</a>' +
			'</li>';
}