// ===============================
// Select Elements
// ===============================

const bookForm = document.getElementById("bookForm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const category = document.getElementById("category");
const isbn = document.getElementById("isbn");
const year = document.getElementById("year");
const status = document.getElementById("status");

const bookTable = document.getElementById("bookTable");
const totalBooks = document.getElementById("totalBooks");
const message = document.getElementById("message");
const editIndex = document.getElementById("editIndex");
const saveBtn = document.getElementById("saveBtn");

const searchBook = document.getElementById("searchBook");
const filterCategory = document.getElementById("filterCategory");
const sortBtn = document.getElementById("sortBtn");
const darkMode = document.getElementById("darkMode");

// ===============================
// Local Storage
// ===============================

let books = JSON.parse(localStorage.getItem("books")) || [];

// ===============================
// Save Data
// ===============================

function saveData() {

    localStorage.setItem("books", JSON.stringify(books));

}

// ===============================
// Show Message
// ===============================

function showMessage(text, color) {

    message.textContent = text;
    message.style.background = color;
    message.style.color = "#fff";
    message.style.padding = "10px";
    message.style.borderRadius = "5px";

    setTimeout(function () {

        message.textContent = "";
        message.style.background = "transparent";
        message.style.padding = "0";

    }, 2000);

}

// ===============================
// Display Books
// ===============================

function displayBooks() {

    bookTable.innerHTML = "";

    books.forEach(function (book, index) {

        bookTable.innerHTML += `

        <tr>

            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.isbn}</td>
            <td>${book.year}</td>
            <td>${book.status}</td>

            <td>

                <button class="editBtn"
                onclick="editBook(${index})">
                Edit
                </button>

                <button class="deleteBtn"
                onclick="deleteBook(${index})">
                Delete
                </button>

            </td>

        </tr>

        `;

    });

    totalBooks.textContent = books.length;

    loadCategories();

    highlightFirstRow();

}

// ===============================
// Add / Update Book
// ===============================

bookForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (
        title.value.trim() === "" ||
        author.value.trim() === "" ||
        category.value.trim() === "" ||
        isbn.value.trim() === "" ||
        year.value.trim() === "" ||
        status.value === ""
    ) {

        showMessage("Please Fill All Fields", "red");
        return;

    }

    const book = {

        title: title.value.trim(),
        author: author.value.trim(),
        category: category.value.trim(),
        isbn: isbn.value.trim(),
        year: year.value,
        status: status.value

    };

    if (editIndex.value === "") {

        books.push(book);

        showMessage("Book Added Successfully", "green");

    }

    else {

        books[editIndex.value] = book;

        editIndex.value = "";

        saveBtn.textContent = "Add Book";

        showMessage("Book Updated Successfully", "green");

    }

    saveData();

    displayBooks();

    bookForm.reset();

});

// ===============================
// Load Books
// ===============================

displayBooks();





// ===============================
// Edit Book
// ===============================

function editBook(index) {

    let book = books[index];

    title.value = book.title;
    author.value = book.author;
    category.value = book.category;
    isbn.value = book.isbn;
    year.value = book.year;
    status.value = book.status;

    editIndex.value = index;

    saveBtn.textContent = "Update Book";

}

// ===============================
// Delete Book
// ===============================

function deleteBook(index) {

    if (confirm("Are you sure you want to delete this book?")) {

        books.splice(index, 1);

        saveData();

        displayBooks();

        showMessage("Book Deleted Successfully", "red");

    }

}

// ===============================
// Search Book
// ===============================

searchBook.addEventListener("keyup", function () {

    let value = searchBook.value.toLowerCase();

    let rows = bookTable.children;

    for (let row of rows) {

        let title = row.children[0].textContent.toLowerCase();
        let author = row.children[1].textContent.toLowerCase();
        let category = row.children[2].textContent.toLowerCase();

        if (
            title.includes(value) ||
            author.includes(value) ||
            category.includes(value)
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    }

});

// ===============================
// Load Categories
// ===============================

function loadCategories() {

    filterCategory.innerHTML =
        '<option value="All">All Categories</option>';

    let categories = [];

    books.forEach(function (book) {

        if (!categories.includes(book.category)) {

            categories.push(book.category);

            filterCategory.innerHTML +=
                `<option value="${book.category}">
                    ${book.category}
                </option>`;

        }

    });

}

// ===============================
// Filter Category
// ===============================

filterCategory.addEventListener("change", function () {

    let selected = this.value;

    let rows = bookTable.children;

    for (let row of rows) {

        let cat = row.children[2].textContent;

        if (selected === "All" || cat === selected) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    }

});

// ===============================
// Sort Books
// ===============================

sortBtn.addEventListener("click", function () {

    books.sort(function (a, b) {

        return a.title.localeCompare(b.title);

    });

    saveData();

    displayBooks();

});

// ===============================
// Dark Mode
// ===============================

darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});

// ===============================
// childNodes Example
// ===============================

function highlightFirstRow() {

    if (bookTable.childNodes.length > 0) {

        console.log(bookTable.childNodes);

    }

}