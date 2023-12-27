document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
e.preventDefault()
handleSubmit(e.target.querySelector('#new-task-description').value)
  })

  function handleSubmit(todo){
    let tasks=document.getElementById("tasks")
    let list=document.createElement('li')
    tasks.appendChild(list)
    list.innerHTML=todo
   


  }
});
