const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
  return students;
}

//L'elemento viene aggiunto nonostante la dichiarazione const perchè javascript gestisce i tipi primitivi rispetto alle strutture come array

addStudent('Marco');
console.log(students);