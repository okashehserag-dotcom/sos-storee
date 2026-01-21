
let current = 0;
let likes = JSON.parse(localStorage.getItem("likes")) || Array(10).fill(0);
let comments = JSON.parse(localStorage.getItem("comments")) || Array(10).fill([]);

function openProduct(index) {
  current = index;
  document.getElementById("likes").innerText = likes[index];
  renderComments();
  document.getElementById("modal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("modal").style.display = "none";
}

function like() {
  likes[current]++;
  localStorage.setItem("likes", JSON.stringify(likes));
  document.getElementById("likes").innerText = likes[current];
}

function addComment() {
  const input = document.getElementById("commentInput");
  if (!input.value) return;

  comments[current].push(input.value);
  localStorage.setItem("comments", JSON.stringify(comments));
  input.value = "";
  renderComments();
}

function renderComments() {
  const box = document.getElementById("comments");
  box.innerHTML = "";
  comments[current].forEach(c => {
    const p = document.createElement("p");
    p.textContent = c;
    box.appendChild(p);
  });
}
