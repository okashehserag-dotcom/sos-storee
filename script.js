let likes = 0;

function openProduct() {
  document.getElementById("productModal").style.display = "block";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";
}

function like() {
  likes++;
  document.getElementById("likes").innerText = likes;
}

function addComment() {
  const input = document.getElementById("commentInput");
  if (!input.value) return;

  const div = document.createElement("div");
  div.innerText = input.value;
  document.getElementById("comments").appendChild(div);
  input.value = "";
}
