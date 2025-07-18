let num1, num2;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("question").innerText = `Bé ơi, ${num1} + ${num2} = ?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const answer = parseInt(document.getElementById("answer").value);
  const correct = num1 + num2;

  if (answer === correct) {
    document.getElementById("feedback").innerText = "🎉 Chính xác! Giỏi lắm!";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").innerText = `❌ Sai rồi! Đáp án đúng là ${correct}`;
    document.getElementById("feedback").style.color = "red";
  }

  setTimeout(generateQuestion, 2000); // Đổi câu sau 2 giây
}

window.onload = generateQuestion;
