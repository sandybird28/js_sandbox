const SECRET_KEY = '$2b$10$fl.Yz164tSiBrKX44TtDYeEGuoxDVkkKse8dfxt.CYmcJHGgDZcl2';
const id = '5d988907c511ea7c9422f43f';
const input = document.getElementById('input');
const add = document.getElementById('add');
const tasks = document.getElementById('tasks');

add.disabled = true;
async function readBin(){
    
    await fetch(`https://api.jsonbin.io/b/${id}/latest`, {
        method : 'GET',
        headers: {
            'secret-key': SECRET_KEY
        }
    })
    .then((response)=>response.json())
    .then(data => {
        //addTask
        Object.keys(data).forEach((key)=>{
            addTask(data[key])    
        })
    })
    add.disabled = false;
};

function addTask(task){
    const li = document.createElement('li');
    const b = document.createElement('button');
    li.textContent=task;
    b.onclick = () => {
        deleteTask(b);
        updateBin(getTaskList())

    }
    li.appendChild(b);
    tasks.appendChild(li)
}

function getTaskList(){
    let data ={}
    for(let i = 0 ; i <= tasks.children.length-1 ; i += 1){
        data[i]=tasks.children[i].textContent
    }
    return data
};




function updateBin(obj){
    fetch(`https://api.jsonbin.io/b/${id}`, {
        method : 'PUT',
        headers: {
            'Content-type': 'application/json',
            'secret-key': SECRET_KEY,
            versioning: 'true'
        },
        body: JSON.stringify(obj)
    })
};

function deleteTask(button){
    const li = button.parentElement;
    li.parentElement.removeChild(li)

}


add.onclick = () => {
    if(input.value.length>0){
    addTask(input.value);
    input.value ='';
    updateBin(getTaskList())
    }
}

readBin();