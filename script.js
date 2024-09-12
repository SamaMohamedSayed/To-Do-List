let inputText=document.getElementById('input-text');
let list=document.getElementById('list');

function addTask(){
    if(inputText.value===''){
        alert("You Must Add Task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        list.appendChild(li);

        let icon=document.createElement("span");
        icon.innerHTML="\u00d7";
        li.appendChild(icon);
    }
    inputText.value="";
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("li-check");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    };
});