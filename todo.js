// Handle logout
document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'index.html';
});

let completedTasks = 0;

document.getElementById('todo-list').addEventListener('click', function () {
    console.log('todo-list clicked'); // Debug statement

    document.getElementById('todo-list-table').style.display = 'block';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var tableBody = document.getElementById("todo-list-body");

            for (var i = 0; i < response.length; i++) {
                var row = document.createElement("tr");

                // Create a cell for the task title
                var taskCell = document.createElement("td");
                taskCell.textContent = response[i].title;

                // Create a cell for the task status
                var statusCell = document.createElement("td");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";

                if (response[i].completed) {
                    checkbox.checked = true;
                    checkbox.disabled = true; // Disable the checkbox if completed is true
                }

                statusCell.appendChild(checkbox);

                row.appendChild(taskCell);
                row.appendChild(statusCell);

                tableBody.appendChild(row);
            }

            // Call a function to handle the checkbox clicks
            handleCheckboxClicks();
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
});

// Function to handle checkbox clicks
function handleCheckboxClicks() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var checkedCount = 0;

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                checkedCount++;
            } else {
                checkedCount--;
            }

            console.log('Checked count:', checkedCount); // Debug statement

            if (checkedCount === 5) {
                // Create a Promise to show the alert
                var promise = new Promise(function (resolve, reject) {
                    resolve();
                });

                promise.then(function () {
                    alert("Congrats. 5 Tasks have been Successfully Completed");
                });
            }
        });
    });
}
