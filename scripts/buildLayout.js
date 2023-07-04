function buildLayout(snapshot, uid) {
    let container = '';
    var items = [];

    items = snapshot;

    items.forEach((doc) => {
        var data = doc.data();
        var li = `
            <div class="task_hold">
               <i data-id="${doc.id}" class="fa-solid fa-square-check ${data['isChecked'] ? "checked" : ""}"></i>
                <div class="about_task">
                    <p class="task_name">${data['task']}</p>
                    <p class="task_cat">${data['category']}</p>
                    <p class="task_due_date">${data['endDate']}</p>
                </div>
                <div class="action_icons">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>


                <div class="action-menu">
                    <ul>
                        <li><a href="">Edit</a></li>
                        <hr>
                        <li><a href="" style="color: rgb(255, 59, 59);">Delete</a></li>
                    </ul>
                </div>
            </div>
        
        `;
        container += li;
    });

    document.querySelector('.task-rapper').innerHTML = container;
    
    createEventListeners(uid);
}

//Creates an event listener for every checkbox
function createEventListeners(uid) {
    var todoCheckMarks = document.querySelectorAll('.task_hold .fa-square-check');

    todoCheckMarks.forEach((checkMark) => {
        checkMark.addEventListener("click", function () {
            markCompleted(checkMark.dataset.id, uid);
        });
    });
}

//Mark a task as completed
function markCompleted(docId, uid) {

    var docRef = db.collection('users').doc(uid).collection('task').doc(docId);

    docRef.get().then((doc) => {
        if (doc.exists) {
            let checkValue = doc.data().isChecked;
            docRef.update({
                isChecked: !checkValue
            })
        }

    })

}
