/* NAVIGATION MENU */
const toggleBtn = document.getElementById("aboutToggle");
const dropdown = document.getElementById("aboutDropdown");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

// close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
    dropdown.classList.remove("show");
  }
});

/* BLOG FRAGA */
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('show');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('show');
}

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.nextElementSibling;
    content.classList.toggle('open');
  });
});

