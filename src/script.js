let quiz = [];

let currentQuestion = 0;

let correctAnswers = 0;

let studentName = "";

// =========================
// TAB MENU
// =========================

function showCreate() {
  document.getElementById("createSection").style.display = "block";

  document.getElementById("quizSection").style.display = "none";
}

function showQuiz() {
  document.getElementById("createSection").style.display = "none";

  document.getElementById("quizSection").style.display = "block";

  loadStudentResults();
}

// =========================
// CREATE QUESTION
// =========================

function saveQuestion() {
  const question = document.getElementById("question").value.trim();

  const a = document.getElementById("optionA").value.trim();

  const b = document.getElementById("optionB").value.trim();

  const c = document.getElementById("optionC").value.trim();

  const d = document.getElementById("optionD").value.trim();

  const correct = document.getElementById("correct").value;

  // VALIDATION

  if (question === "" || a === "" || b === "" || c === "" || d === "") {
    alert("Lengkapi semua data soal!");
    return;
  }

  quiz.push({
    question,
    a,
    b,
    c,
    d,
    correct,
  });

  document.getElementById("questionCount").textContent = quiz.length;

  alert("Soal berhasil disimpan!");

  document.getElementById("question").value = "";

  document.getElementById("optionA").value = "";

  document.getElementById("optionB").value = "";

  document.getElementById("optionC").value = "";

  document.getElementById("optionD").value = "";
}

// =========================
// START QUIZ
// =========================

function startQuiz() {
  studentName = document.getElementById("studentName").value.trim();

  if (studentName === "") {
    alert("Masukkan nama mahasiswa!");
    return;
  }

  if (quiz.length === 0) {
    document.getElementById("quizArea").innerHTML = "<h3>Belum ada soal.</h3>";

    return;
  }

  currentQuestion = 0;

  correctAnswers = 0;

  showQuestion();
}

// =========================
// SHOW QUESTION
// =========================

function showQuestion() {
  const q = quiz[currentQuestion];

  document.getElementById("quizArea").innerHTML = `

        <h3>
            Soal ${currentQuestion + 1}
            dari ${quiz.length}
        </h3>

        <h2>${q.question}</h2>

        <button
            class="answer-btn"
            onclick="checkAnswer('A')">
            A. ${q.a}
        </button>

        <button
            class="answer-btn"
            onclick="checkAnswer('B')">
            B. ${q.b}
        </button>

        <button
            class="answer-btn"
            onclick="checkAnswer('C')">
            C. ${q.c}
        </button>

        <button
            class="answer-btn"
            onclick="checkAnswer('D')">
            D. ${q.d}
        </button>
    `;
}

// =========================
// CHECK ANSWER
// =========================

function checkAnswer(choice) {
  if (choice === quiz[currentQuestion].correct) {
    correctAnswers++;
  }

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// =========================
// SHOW RESULT
// =========================

function showResult() {
  const score = Math.round((correctAnswers / quiz.length) * 100);

  saveStudentResult(studentName, score);

  document.getElementById("quizArea").innerHTML = `

        <div class="result-box">

            <h2>Hasil Kuis</h2>

            <h3>
                Nama:
                ${studentName}
            </h3>

            <h3>
                Jawaban Benar:
                ${correctAnswers}
                dari
                ${quiz.length}
            </h3>

            <h1 class="score">
                Nilai: ${score}
            </h1>

        </div>

    `;

  loadStudentResults();
}

// =========================
// LOCAL STORAGE
// =========================

function saveStudentResult(name, score) {
  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push({
    name,
    score,
  });

  localStorage.setItem("students", JSON.stringify(students));
}

function loadStudentResults() {
  let students = JSON.parse(localStorage.getItem("students")) || [];

  let html = "";

  students.forEach((student) => {
    html += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.score}</td>
                </tr>
            `;
  });

  document.getElementById("studentBody").innerHTML = html;
}

// =========================
// LOAD DATA
// =========================

loadStudentResults();
