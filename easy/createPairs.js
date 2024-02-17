const students = [
  'Atheon',
  'Crota',
  'Oryx',
  'Calus',
  'Riven',
  'Salvation Mind',
  'Scolas',
  'Rulk',
];


function getRandom() {
  return Math.floor(Math.random() * newStudents.length)
};

const studentPairs = {
  group1: []
};

let iterator = 1;

const newStudents = [...students];
for (let i = 0; i < students.length; i++) {
  let keyIterator = `group${iterator}`;
  
  const index = Math.floor(Math.random() * newStudents.length)
  const randomStudent = newStudents[index];
  newStudents.splice(index, 1);
  
  if (studentPairs[keyIterator].length === 2) {
    iterator++
    keyIterator = `group${iterator}`;
    studentPairs[keyIterator] = []
  }
  
  studentPairs[keyIterator].push(randomStudent);
}

console.log(studentPairs);


// Given a List of Students, create a function that organizes those students randomly into groups of two. If there is a remainder, add them to a group of two


