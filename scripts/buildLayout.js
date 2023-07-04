function buildLayout(snapshot) {
    let container = '';
    var items = [];

    items = snapshot;

    items.forEach((doc) => {
        var li = `
            <div class="task_hold">
                <input type="checkbox" name="" id="status-check">
                <label for="status-check"><i class="fa-solid fa-square-check"></i></label>
                <div class="about_task">
                    <p class="task_name">Task name</p>
                    <p class="task_cat">Task cat</p>
                    <p class="task_due_date">Task Due Date</p>
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
}