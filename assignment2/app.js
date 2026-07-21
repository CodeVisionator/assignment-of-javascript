// Task 1

let fullName = prompt("Enter your Full Nam:");
let age = prompt("Enter your Age:");
let city = prompt("Enter your City:");
let profession = prompt("Enter your Profession:");
let email = prompt("Enter your Emial:");
let phone = prompt("Enter your Phone Number:"); 

// =============================================================>

// Task 2

let user = {
    fullName: fullName,
    age: age,
    city: city,
    profession: profession,
    emial: email,
    phone: phone,
};

let users = JSON.parse(localStorage.getItem("users")) || [];

users.push(user);

localStorage.setItem("users", JSON.stringify(users));

//=================================================================>


// Task 3

let userData = document.getElementById("userData");

userData.innerHTML = " ";

let savedUsers = JSON.parse(localStorage.getItem("users")) || [];

savedUsers.forEach(function (user, index) {
    userData.innerHTML += `
    <div>
        <h2>User ${index + 1}</h2>
        <p><strong>Name:</strong>${user.fullName}</p> 
        <p><strong>Age:</strong>${user.age}</p> 
        <p><strong>City:</strong>${user.city}</p> 
        <p><strong>Profession:</strong>${user.profession}</p> 
        <p><strong>Email:</strong>${user.email}</p> 
        <p><strong>Phone Number:</strong>${user.phone}</p> 
    
    </div>`;    
});













