// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create student objects
const student1: Student = {
  firstName: "Thando",
  lastName: "Maseko",
  age: 23,
  location: "Johannesburg"
};

const student2: Student = {
  firstName: "Sipho",
  lastName: "Dlamini",
  age: 25,
  location: "Cape Town"
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table element
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

// 5. Render each student as a row
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid #444";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid #444";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 6. Append the table to the document body
document.body.appendChild(table);
