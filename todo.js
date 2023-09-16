// Handle logout
document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'index.html';
});

let completedTasks = 0;

document.getElementById('todo-list').addEventListener('click', function () {
    // console.log('clicked'); 

    document.getElementById('todo-list-table').style.display = 'block';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var tableBody = document.getElementById("todo-list-body");
            tableBody.innerHTML = ''; // Clear existing content

            for (var i = 0; i < response.length; i++) {
                var row = `
                    <tr>
                        <td>${response[i].title}</td>
                        <td>
                            <input type='checkbox' ${response[i].completed ? 'checked disabled' : ''} />
                        </td>
                    </tr>
                `;

                tableBody.innerHTML += row;
            }

            handleCheckboxClicks();
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
});

function handleCheckboxClicks() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var checkedCount = 0;
  
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("click", function () {
        if (this.checked) {
          checkedCount++;
        } else {
          checkedCount--;
        }
  
        if (checkedCount === 5) {
          var promise = new Promise(function (resolve, reject) {
            resolve();
          });
  
          promise.then(function () {
            alert("Congrats. 5 Tasks have been Successfully Completed");
          });
        }
      });
    }
}
