/**
 * let ●●● = [];
 * $("●●●")
 * 
$("#●●●").on("click", function () {

});
for (let i = 0; i < ●●●; i++) {

let taskList = [];

//ローカルストレージから取ってくる
const task = localStorage.getItem('todoText');
console.log(taskList, task);

if (task !== null) {
  //繰り返し表示
  taskList = JSON.parse(task);
  //ローカルストレージのタスクを画面上に繰り返し表示
  for (let i = 0; i < taskList.length; i++) {
      $("#todoList").append(`<li>${taskList[i]}</li>`);
  };
}
/*
let taskList = [];
//ローカルストレージから取ってくる
const task = localStorage.getItem('todoText');
console.log(taskList, task);
*/
let todoList = [];

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    $("#todoList").append(`<li>${key}：${value}</li>`);
  }
}


//追加ボタンをクリック時
$("#addTodoBtn").on("click", function () {
    //入力されたテキスト情報を取得
  const todoText = $("#todoText").val();
  const todoDate = $("#todoDate").val();
  const prty2= $("#prty2").val();
 // const tasks = JSON.parse(prty2,todoText);

  if (todoText !== "") {

//ローカルストレージに格納
    localStorage.setItem(todoDate, todoText);
//   localStorage.setitem(todoDate,tasks);
//    localStorage.setitem(value,JSON.parse(tasks));
//TodoListに表示し、入力欄を空へ
    $("#todoList").append(`<li>${todoDate}：${prty2}：${todoText}</li>`);
    $("#todoText").val("");
    $("#prty2").val("");
    $("#todoDate").val("");
  }
});

//deleteボタンクリック時
$('#deleteTodoBtn').on('click', function () {
    //localstrageのデータを全削除
      localStorage.clear();
     //画面上のタスク情報を全部削除
     $("#todoList").empty();

    });
