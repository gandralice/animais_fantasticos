//0312
export default function init_ascroll() {
  const sections = document.querySelectorAll(".grid-section");
  if (sections.length) {
    const window_h = window.innerHeight * 0.7;
    function anima_scroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - window_h;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    anima_scroll();
    window.addEventListener("scroll", anima_scroll);
  }
}
