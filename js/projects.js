const categories = document.querySelector("categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelector(".project");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) {
    return;
  }
  activeSelection(e.target);
});

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}
