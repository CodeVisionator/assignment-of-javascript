//ASSIGNMENT







// Task # 1

// let userName = prompt("Enter Your Name:");
// let age = prompt("Enter Your Age: ");

// alert("Welcome " + userName + "!");

// console.log("Name:" + userName);
// console.log("Age:" + age);


//-------------------------------------------------------------------------------------->

// Task # 2

// function checkGrade(marks){
//     if (marks >= 80) {
//         console.log("A Grade");
//     } else {
//         if (marks >= 70) {
//             console.log("B Grade");
//         } else {
//             if (marks >=60) {
//                 console.log("C Grade");
//             } else {
//                 if (marks >= 50) {
//                     console.log("Pass");
//                 } else {
//                     console.log("Fail");
//                 }
//             }
//         }
        
//     }
// }

// checkGrade(67);
// checkGrade(89);
// checkGrade(43);


//----------------------------------------------------------------------------------------->


// Task # 3

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     } 
// }

//-------------------------------------------------------------------------------------------->


// Task # 4

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


//----------------------------------------------------------------------------------------------------->

// Task # 5

// let students = ["Ali", "Ahmed", "Sara", "Zain"];

// students.push("Fatima");
// students.shift();
// students.unshift("Usman");
// students.pop();

// console.log(students);

//----------------------------------------------------------------------------------------------->




// Task # 6

// let numbers = [10, 20, 30, 40, 50, 60];

// let newArr = numbers.slice(1, 4);

// numbers.splice(2, 2)

// console.log("New Array: " + newArr);
// console.log("Array After Splice: " + numbers);


//--------------------------------------------------------------------------------------------------->


// Task # 7

// let student = {
//     name: "Ali",
//     age : 18,
//     city : "Karachi",
//     course : "Javascript",
// };

// console.log("Name:" + student.name);
// console.log("City:" + student.city);


//--------------------------------------------------------------------------------------------------->



// Task # 8

// let students = [
//     {
//         name: "Ahmed",
//         marks: 82,
//     },
//     {
//         name: "Sana",
//         marks: 95,
//     },
//     {
//         name: "Bilal",
//         marks: 69,
//     },
//     {
//         name: "Zayan",
//         marks: 47,
//     },
// ]

// console.log(students);


//---------------------------------------------------------------------------------------------->


// Part A


// let students = [
//     {
//         name: "Ahmed",
//         marks: 82,
//     },
//     {
//         name: "Sana",
//         marks: 95,
//     },
//     {
//         name: "Bilal",
//         marks: 69,
//     },
//     {
//         name: "Zayan",
//         marks: 47,
//     },
// ]


// let studentNames = students.map(function (students) {
//     return students.name;
// })

// console.log(studentNames);


//------------------------------------------------------------------------------------------------------>


//Part B

// let students = [
//     {
//         name: "Ahmed",
//         marks: 82,
//     },
//     {
//         name: "Sana",
//         marks: 95,
//     },
//     {
//         name: "Bilal",
//         marks: 69,
//     },
//     {
//         name: "Zayan",
//         marks: 47,
//     },
// ]

// students.forEach(function (student) {
//     console.log(student.name + " scored " + student.marks + " marks.");
// })


//--------------------------------------------------------------------------------------------------->


// Bonus Challenge

// let students = [
//     {
//         name: "Ahmed",
//         marks: 82,
//     },
//     {
//         name: "Sana",
//         marks: 95,
//     },
//     {
//         name: "Bilal",
//         marks: 69,
//     },
//     {
//         name: "Zayan",
//         marks: 47,
//     },
// ]

// function findTopper(students) {
//     let topper = students[0];

//     for (let i = 1; i < students.length; i++) {
//         if (students[i].marks > topper.marks) {
//             topper = students[i];
//         } 
//     }

//     console.log("Topper:" + topper.name);
//     console.log("Marks:" + topper.marks);
// }


// findTopper(students);







