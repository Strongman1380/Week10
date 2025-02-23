// Get form and table references
const userForm = document.getElementById('userForm');
const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

// User counter to track entry numbers
let userCount = 1;

// Event listener for form submission to add new users
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Get input values and trim whitespace
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate inputs
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Increment user count for the new entry
    userCount++;

    // Create a new row in the table
    const newRow = userTable.insertRow();

    // Create and populate cells
    const cell1 = newRow.insertCell(0); // User number
    const cell2 = newRow.insertCell(1); // User name
    const cell3 = newRow.insertCell(2); // User email
    const cell4 = newRow.insertCell(3); // Delete button

    cell1.textContent = userCount;
    cell2.textContent = name;
    cell3.textContent = email;

    // Create and append the Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
    cell4.appendChild(deleteBtn);

    // Clear the form inputs after submission
    userForm.reset();
});

// Event delegation to handle delete button clicks
userTable.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
        // Confirm before deleting
        const confirmDelete = confirm('Are you sure you want to delete this user?');
        if (confirmDelete) {
            const row = event.target.closest('tr'); // Find the parent row
            row.remove(); // Remove the selected row
        }
    }
});