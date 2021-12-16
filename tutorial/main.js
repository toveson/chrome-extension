// get the stored data and display it
chrome.storage.sync.get({ tasks: "" }, (result) => {
    document.getElementById("list_task").innerHTML = result.tasks;
});

// submitting it
form = document.forms.myForm;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    list_item = document.getElementById("list_task");
    var list = document.createElement("li");
    var listContent = document.createTextNode(form.task.value);
    list.appendChild(listContent);
    list_item.appendChild(list);
    form.task.value = "";

    // save the task
    tasks = document.getElementById("list_task").innerHTML;
    chrome.storage.sync.set({ tasks: tasks }, () => {
        console.log(tasks);
    });
});

// marking it as complete
const ul = document.getElementById("list_task");
ul.addEventListener("click", function (e) {
    e.target.classList.toggle("checked");

    //save it
    tasks = document.getElementById("list_task").innerHTML;
    chrome.storage.sync.set({ tasks: tasks }, () => {
        console.log(tasks);
    });
});