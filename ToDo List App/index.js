window.addEventListener('load',() =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_ele =document.querySelector("#tasks");


    form.addEventListener('submit',(e) =>{
        e.preventDefault();
        const task= input.value;
        if(!task){
            alert("Please fill out the task");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");


        const task_content_ele=document.createElement("div");
        task_content_ele.classList.add("content");
        // task_content_ele.innerText=task;
        task_el.appendChild(task_content_ele);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");


        task_content_ele.appendChild(task_input_el);

        const task_action_ele=document.createElement("div");
        task_action_ele.classList.add("action");

        const task_edit_ele =document.createElement("button");
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML="Edit" ;
        
        const task_delete_ele =document.createElement("button");
        task_delete_ele.classList.add("delete");
        task_delete_ele.innerHTML ="Delete";



        task_action_ele.appendChild(task_edit_ele);
        task_action_ele.appendChild(task_delete_ele);

        task_el.appendChild(task_action_ele);

        list_ele.appendChild(task_el);


        input.value="";
        task_edit_ele.addEventListener('click',()=>{
            if(task_edit_ele.innerText.toLocaleLowerCase()=="edit"){
                task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_ele.innerText="save";
            }
            else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_ele.innerText="edit";
            }
        })

        task_delete_ele.addEventListener('click',()=>{
            list_ele.removeChild(task_el);
        });
        
    });
});