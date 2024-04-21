document.querySelector('form').addEventListener('submit',(event)=>{
        event.preventDefault();
});
   


let ordered_list = document.getElementById("ordered-list");
function adding() {
    let entries = document.getElementById("data").value;
   
    let listItem = document.createElement("li");
    let buttons=document.createElement("button");
    buttons.textContent = "X";
    buttons.classList.add("remove");
    let textnode = document.createTextNode(entries);
    listItem.appendChild(textnode);
    listItem.appendChild(buttons);
    ordered_list.appendChild(listItem);    
}
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove')) {
        let listItem = event.target.closest('li');
        listItem.remove();
    }
});


