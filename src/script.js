function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  // Fitur 5 - Validasi Input Kosong
  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // Fitur 1 - Tambah Tugas
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  // Fitur 4 - Tandai Selesai
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // Fitur 3 - Hapus Tugas
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);

  // Fitur 2 - Lihat Daftar Tugas
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
