// Git All Data 
var boxInputContainer = document.getElementById("boxInputContainer");
var boxDetails   = document.getElementById("boxDetails");
var closeBtn     = document.getElementById("closeBtn");
var newTodo = document.getElementById("new-todo");
var newTodoTime = document.getElementById("new-todo-time");
var adder = document.getElementById("adder");
var day = document.getElementById("day")
var tasksTotal = document.getElementById("tasksTotal");
var tasksTotalN = document.getElementById("tasksTotalN");
var monthOf = document.getElementById("month");
var icons = document.getElementById("icons");
var dateOfDay = document.getElementById("date");
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var tasks = document.getElementById("tasks");
var clearAll = document.getElementById("clear-all");

var listArray ;

if(localStorage.getItem("mytodo") != null){
    listArray  = JSON.parse(localStorage.getItem("mytodo"));
    displayData();
}
else{
    listArray = [];
}





function setTimes(){
    var data = new Date();
    console.log(data)
    var today = days[data.getDay()];
    day.innerHTML = today + " ," ;
   
    var todayOfDate = data.getDate();
    console.log(todayOfDate);
    dateOfDay.innerHTML =todayOfDate;

    var month = month1[data.getMonth()];
    console.log(month)
    monthOf.innerHTML = month;

}
setTimes()



adder.addEventListener("click" , function(){

  
    var userData = newTodo.value + " " + newTodoTime.value;
    listArray.push(userData);
    localStorage.setItem("mytodo" , JSON.stringify(listArray));
    displayData(); 
    
})

function displayData(){
    tasksTotalN.innerHTML =  listArray.length;
    var retriveData = ``;
    for(var i = 0 ; i < listArray.length ; i++){
        retriveData+=`
        <li>  ${listArray[i]}
        <span class="icon" ><i onclick="deleteBox(${i})" class="fas fa-trash"></i></span>
        </li>      
        `;
    }
    tasks.innerHTML = retriveData ;
}



function deleteBox(index){
    listArray.splice(index , 1);
    localStorage.setItem("mytodo" , JSON.stringify(listArray));
    displayData();
}


// Show Function boxInputContainer
icons.addEventListener("click", function(){
    boxInputContainer.style.display = "flex";
    
})


// hiidin Function boxInputContainer
closeBtn.addEventListener("click", function(){
    boxInputContainer.style.display = "none";
    
})


clearAll.onclick=()=>{
    listArray = [];
    localStorage.setItem("mytodo" , JSON.stringify(listArray));
    displayData();
}
