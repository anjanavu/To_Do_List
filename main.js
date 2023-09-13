// Handle logout
document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'login.html';
});

let completedTasks = 0;

document.getElementById('todo-list').addEventListener('click', function() {
    // Hide other content and show the todo list container
    document.getElementById('todo-list-container').style.display = 'block';

    // Fetch todo data from the API (assuming you have already implemented this)
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todoListBody = document.getElementById('todo-list-body');

            // Clear the existing table body
            todoListBody.innerHTML = '';

            // Loop through the data and create rows for each todo
            data.forEach(todo => {
                // Create a new row
                const row = document.createElement('tr');

                // Create columns for title and completed status
                const titleColumn = document.createElement('td');
                const completedColumn = document.createElement('td');

                // Create a checkbox for the completed status
                const completedCheckbox = document.createElement('input');
                completedCheckbox.type = 'checkbox';
                completedCheckbox.checked = todo.completed;
                if (todo.completed) {
                    completedCheckbox.disabled = true;
                }
                completedCheckbox.addEventListener('change', function() {
                    // Update the completed status when the checkbox changes
                    todo.completed = this.checked;
                    if (this.checked) {
                        completedTasks++;
                    } else {
                        completedTasks--;
                    }

                    if (completedTasks === 5) {
                        alert(`Congrats....!`);
                    }
                });

                // Set the column content
                titleColumn.textContent = todo.title;

                // Append the checkbox and column to the row
                completedColumn.appendChild(completedCheckbox);
                row.appendChild(titleColumn);
                row.appendChild(completedColumn);

                // Append the row to the todo list body
                todoListBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


