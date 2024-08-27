const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');                     //if the text box will be empty
    }
      else{
    let li = document.createElement('li');                      //creating element 'li'
    li.innerHTML = inputBox.value;                              //whatever text we will enter will be saved in inputBox
    listContainer.appendChild(li);                              // li will be displayed under the list container
    let span = document.createElement("span");                  //creating span element
    span.innerHTML ='\u00d7';                                  //creating the cross 
    li.appendChild(span);                                      //displaying the cross element
    } 
    inputBox.value = '';                                       //after adding input box will get empty.
    saveData();                                 

}

listContainer.addEventListener("click",  function(e)  {
    if(e.target.tagName === "LI"){                            //if we click on list
        e.target.classList.toggle("checked");                  // it will get checked
        saveData();     
    }
    else if(e.target.tagName === "SPAN"){                      //if we click on cross
        e.target.parentElement.remove();                        //it will remove the parent element that is 'li'
        saveData();                  
    }

    
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);     // to save the data of the list in local browser storage
}
function showTask(){                                            // to show the saved data
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();