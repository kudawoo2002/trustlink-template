const barEl = document.getElementById("bar");
const menuEl = document.getElementById("menu");

if (barEl) {
  barEl.addEventListener("click", () => {
    menuEl.classList.toggle("active");
  });
}
