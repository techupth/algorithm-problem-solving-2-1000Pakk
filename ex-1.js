function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i in students) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

// ตอบคำถามตรงนี้จ้า
students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
searchStudent = "John";

let result = findStudentIndex(students, searchStudent);

console.log(result);
