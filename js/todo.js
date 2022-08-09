const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector(
  "#todo-form input"
);
const toDoList = document.getElementById("todo-list");

// 로컬스토리지 투두 키값 선언
const TODOS_KEY = "todos";

// 입력한 투두 값을 변경가능한 배열로 저장하도록 선언
let toDos = [];

// 로컬스토리지에 투두 키-밸류 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 투두 값 하나씩 삭제, 삭제 후 로컬스토리지에 남은 투두 값 다시 선언
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(
    (toDo) => toDo.id !== parseInt(li.id)
  );
  saveToDos();
}

const handleLine = (event) => {
  const li = document.querySelector("ul");
  li.addEventListener(
    "click",
    function (event) {
      if ((event.target.tagName = "span")) {
        event.target.classList.toggle("checked");
      }
    },
    false
  );
};

// 전체삭제, 페이지 및 로컬스토리지 내 투두 값 모두 삭제 후 빈 배열 반환
function clearToDoList(event) {
  document.querySelector("ul").innerHTML = "";
  localStorage.removeItem("todos");
  toDos = [];
}

function clearAll() {
  document
    .getElementById("todo-list")
    .addEventListener("click", clearToDoList());
}

// 투두 내용 추가하기
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "💯";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
