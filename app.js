function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

function createNewToDo() {
    let newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
    renderTheUI(toDos);
  }

function renderTheUI(toDos) {
    let todoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;
      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI(toDos);

  deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      var todo = document.querySelectorAll("li");
      var input = document.querySelectorAll("input");
          for(i = 0; i < input.length; i++){
              if(input[i].checked === true){
                      input[i].parentNode.remove();
              }
          }
  });
}
window.onload = function() {
  onReady();
};
