const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentsTable tbody');
const hiddenId = document.getElementById('hiddenId');
const messageBox = document.getElementById('messageBox');
const sectionInput = document.getElementById('studentSection');

const API_URL = 'http://localhost:3000/students';

// Convert section input to uppercase as user types
sectionInput.addEventListener('input', () => {
    sectionInput.value = sectionInput.value.toUpperCase();
});

// Helper function: Capitalize first letter of each word in name
function capitalizeName(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Display a message (success or error)
function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = type;
    setTimeout(() => {
        messageBox.textContent = '';
        messageBox.className = '';
    }, 3000);
}

// Fetch and display all students in alphabetical order
async function loadStudents() {
    try {
        const response = await fetch(API_URL);
        let students = await response.json();

        // Sort students alphabetically by name
        students.sort((a, b) => a.name.localeCompare(b.name));

        tableBody.innerHTML = '';

        students.forEach(student => {
            const total = student.result.math + student.result.science + student.result.english;
            const percentage = ((total / 300) * 100).toFixed(2);

            tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.section}</td>
                    <td>${student.result.math}</td>
                    <td>${student.result.science}</td>
                    <td>${student.result.english}</td>
                    <td>${total}</td>
                    <td>${percentage}%</td>
                    <td>
                        <button class="edit-btn" onclick="editStudent('${student.id}')">Edit</button>
                        <button class="delete-btn" onclick="removeStudent('${student.id}')">Delete</button>
                    </td>
                </tr>
            `;
        });
    } catch (err) {
        showMessage('Failed to load students.', 'error');
        console.error(err);
    }
}

// Add or update a student
form.addEventListener('submit', async e => {
    e.preventDefault();

    const studentData = {
        name: capitalizeName(document.getElementById('studentName').value), // Capitalized name
        section: document.getElementById('studentSection').value.toUpperCase(), // Uppercase section
        result: {
            math: parseInt(document.getElementById('marksMath').value),
            science: parseInt(document.getElementById('marksScience').value),
            english: parseInt(document.getElementById('marksEnglish').value)
        }
    };

    try {
        if (hiddenId.value) {
            // Update existing student
            await fetch(`${API_URL}/${hiddenId.value}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData)
            });
            showMessage('Student updated successfully!', 'success');
        } else {
            // Add new student
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData)
            });
            showMessage('Student added successfully!', 'success');
        }

        form.reset();
        hiddenId.value = '';
        loadStudents();
    } catch (err) {
        showMessage('Failed to save student.', 'error');
        console.error(err);
    }
});

// Edit a student
async function editStudent(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const student = await response.json();

        hiddenId.value = student.id;
        document.getElementById('studentName').value = student.name;
        document.getElementById('studentSection').value = student.section;
        document.getElementById('marksMath').value = student.result.math;
        document.getElementById('marksScience').value = student.result.science;
        document.getElementById('marksEnglish').value = student.result.english;
    } catch (err) {
        showMessage('Failed to fetch student data.', 'error');
        console.error(err);
    }
}

// Delete a student
async function removeStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            showMessage('Student deleted successfully!', 'success');
            loadStudents();
        } catch (err) {
            showMessage('Failed to delete student.', 'error');
            console.error(err);
        }
    }
}

// Initial load
loadStudents();
