function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      index = mid;
      break;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
}

// ตอบคำถามตรงนี้จ้า
let students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
let searchStudent = "Bob";

let result = findStudentIndex(students, searchStudent);

console.log(result);
