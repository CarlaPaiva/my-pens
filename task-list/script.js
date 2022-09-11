var taksList = document.getElementById("taskList");
var txtTask = document.getElementById("txtTaskName");
var btnAdd = document.getElementById("btnAdd");
var emptyList = document.getElementById("divEmpty");


var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [''];

function renderList() {
	taksList.innerHTML= "";
	
	for (task of tasks){
		let li = document.createElement('li');
		li.setAttribute('class', 'list__item');
		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		
		let p = document.createElement('p');
		p.innerText = task;
		
		var linkElement = document.createElement('a');
        var linkText = document.createTextNode('X');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
		linkElement.setAttribute('class', 'item__button');

        var pos = tasks.indexOf(task);
        linkElement.setAttribute('onclick', 'deleteTask(' + pos + ')');
		
		li.appendChild(input);
		li.appendChild(p);
		li.appendChild(linkElement);
		
		taskList.appendChild(li);
		
	}
	showCardIfListIsEmpty();
}

renderList();

function addTask(){
	const textTask = txtTask.value;
	tasks.push(textTask);
	txtTask.value = '';
	saveToStorage();
	renderList();
};

function saveToStorage(){
    localStorage.setItem('list_tasks', JSON.stringify(tasks));
}

function deleteTask(pos){
	tasks.splice(pos, 1);
	saveToStorage();
	renderList();
}

function showCardIfListIsEmpty(){
	if (tasks.length === 0){
		emptyList.setAttribute('style', 'display:block');
	} else {
		emptyList.setAttribute('style', 'display:none');
	}
}