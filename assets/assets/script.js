
// script.js
const form = document.getElementById('gradeForm');
const gradesList = document.getElementById('grades');
const teacherPanel = document.getElementById('teacherPanel');
const studentPanel = document.getElementById('studentPanel');
const loginSection = document.getElementById('loginSection');

let storedGrades = [];

form?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('studentName').value;
  const subject = document.getElementById('subject').value;
  const grade = document.getElementById('grade').value;
  const note = document.getElementById('note').value;

  const entry = { name, subject, grade, note };
  storedGrades.push(entry);
  updateGradeList();

  form.reset();
});

function login() {
  const role = document.getElementById('userRole').value;
  const user = document.getElementById('username').value;
  loginSection.classList.add('hidden');
  if (role === 'teacher') {
    teacherPanel.classList.remove('hidden');
  } else {
    studentPanel.classList.remove('hidden');
    updateGradeList();
  }
}

function updateGradeList() {
  gradesList.innerHTML = '';
  storedGrades.forEach(grade => {
    const li = document.createElement('li');
    li.textContent = `${grade.name} (${grade.subject}) - Ocjena: ${grade.grade}${grade.note ? ' | Bilješka: ' + grade.note : ''}`;
    gradesList.appendChild(li);
  });
}
