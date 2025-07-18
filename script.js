let a,b;
function gen(){ a=Math.ceil(Math.random()*10); b=Math.ceil(Math.random()*10); document.getElementById("question").innerText=`${a} + ${b} = ?`; document.getElementById("answer").value=""; }
function checkAnswer(){
  const ans = +document.getElementById("answer").value;
  const fb = document.getElementById("feedback");
  fb.innerText = ans===a+b ? "✅ Đúng!" : `❌ Sai! Đáp án: ${a+b}`;
  fb.style.color = ans===a+b?'green':'red';
  setTimeout(gen,1500);
}
window.onload=gen;
