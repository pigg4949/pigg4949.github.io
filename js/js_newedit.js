// ✅ Home fade out
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// ✅ Arrow Up Button
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  arrowUp.style.opacity = window.scrollY > homeHeight / 2 ? 1 : 0;
});
arrowUp.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Mobile Navigation Toggle
const navbarMenu = document.querySelector(".header__nav");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});

// ✅ Project Filter + Flip 카드 호환
const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project__item");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) return;
  selectCategory(e.target);
  filterProjects(filter);
});

function selectCategory(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    const type = project.dataset.type;
    if (filter === "all" || filter === type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });

  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 300);
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".bar__value");
      bars.forEach((bar) => {
        const value = bar.dataset.skill;
        bar.style.width = value;
      });
      observer.unobserve(entry.target); // 한 번만 실행되게
    }
  });
}, observerOptions);

// 대상 요소 등록 (전체 skill 박스에 대해)
const skillSection = document.querySelector(".skill");
skillObserver.observe(skillSection);
