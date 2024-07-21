const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const button= document.getElementById("button");

button.addEventListener("click", addTask);

 function addTask(){
    if(inputBox.value === ''){
        alert("Plese add a task");
      }else{
          let li= document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.append(li);
          let span = document.createElement("span");
          span.innerHTML= "\u00d7";
          li.appendChild(span);
      }
      inputBox.value= " ";
      saveData();
 };
  
 
 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
 }, false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");

 }
 showTask();