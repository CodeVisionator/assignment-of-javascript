// ==========================
// Student Management System
// ==========================

// Array to Store Students
let students = [];

// Edit Index
let editIndex = -1;

// Form Elements
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const emailInput = document.getElementById("email");

const message = document.getElementById("message");
const studentBody = document.getElementById("studentBody");

// ==========================
// Add Student
// ==========================

studentForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const age = ageInput.value.trim();
    const course = courseInput.value.trim();
    const email = emailInput.value.trim();

    // Validation

    if (
        name === "" ||
        roll === "" ||
        age === "" ||
        course === "" ||
        email === ""
    ) {
        message.textContent = "Please fill all fields.";
        return;
    }

    if (Number(age) <= 15) {
        message.textContent = "Age must be greater than 15.";
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Invalid Email Address.";
        return;
    }

    const duplicate = students.find(student =>
        student.roll === roll &&
        students.indexOf(student) !== editIndex
    );

    if (duplicate) {
        message.textContent = "Roll Number already exists.";
        return;
    }

    message.textContent = "";

    const student = {

        name,
        roll,
        age,
        course,
        email

    };

    // Add Student

    if (editIndex === -1) {

        students.push(student);

    } else {

        students[editIndex] = student;
        editIndex = -1;

        document.getElementById("addBtn").textContent =
            "Add Student";

    }

    displayStudents();

    studentForm.reset();

});

// ==========================
// Display Students

function displayStudents() {

    studentBody.innerHTML = "";

    students.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

        <td>${student.name}</td>

        <td>${student.roll}</td>

        <td>${student.age}</td>

        <td>${student.course}</td>

        <td>${student.email}</td>

        <td>

            <button
            class="edit-btn"
            onclick="editStudent(${index})">
            Edit
            </button>

            <button
            class="delete-btn"
            onclick="deleteStudent(${index})">
            Delete
            </button>

        </td>

        `;

        studentBody.appendChild(row);

    });

}
// ==========================
// Edit, Delete, Counter & Empty State

// Elements
const studentCount = document.getElementById("studentCount");
const emptyState = document.getElementById("emptyState");

// ==========================
// Edit Student

function editStudent(index) {

    const student = students[index];

    nameInput.value = student.name;
    rollInput.value = student.roll;
    ageInput.value = student.age;
    courseInput.value = student.course;
    emailInput.value = student.email;

    editIndex = index;

    document.getElementById("addBtn").textContent = "Update Student";
}

// ==========================
// Delete Student

function deleteStudent(index) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
        return;
    }

    students.splice(index, 1);

    displayStudents();
}

// ==========================
// Update Counter

function updateCounter() {

    studentCount.textContent = students.length;

}

// ==========================
// Empty State

function toggleEmptyState() {

    if (students.length === 0) {

        emptyState.style.display = "block";

    } else {

        emptyState.style.display = "none";

    }

}

// ==========================
// Updated Display Function
// Replace your old displayStudents()
// with this one

function displayStudents() {

    studentBody.innerHTML = "";

    students.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editStudent(${index})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>

            </td>

        `;

        studentBody.appendChild(row);

    });

    // Update Counter
    updateCounter();

    // Show / Hide Empty State
    toggleEmptyState();

}


// ==========================
// Search, Sort & Dark Mode

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const search = this.value.toLowerCase();

    const rows = studentBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const name = row.children[0].textContent.toLowerCase();
        const roll = row.children[1].textContent.toLowerCase();
        const course = row.children[3].textContent.toLowerCase();

        if (
            name.includes(search) ||
            roll.includes(search) ||
            course.includes(search)
        ) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});

// ==========================
// Sort A-Z

document
    .getElementById("sortAZ")
    .addEventListener("click", function () {

        students.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });

        displayStudents();

    });

// ==========================
// Sort Z-A

document
    .getElementById("sortZA")
    .addEventListener("click", function () {

        students.sort(function (a, b) {
            return b.name.localeCompare(a.name);
        });

        displayStudents();

    });

// ==========================>
// Dark Mode

document
    .getElementById("darkMode")
    .addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

// ==========================
// Initial Load

updateCounter();
toggleEmptyState();