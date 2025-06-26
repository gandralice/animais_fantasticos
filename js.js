function init_tabnav() {
  const tab_menu = document.querySelectorAll(".js-tabmenu li");
  const tab_content = document.querySelectorAll(".js-tabcontent section");

  if (tab_menu.length && tab_content.length) {
    function active_tab(index) {
      tab_content.forEach((item) => {
        item.classList.remove("ativo");
      });
      tab_content[index].classList.add("ativo");
    }
    tab_menu.forEach((item, index) => {
      item.addEventListener("click", () => {
        active_tab(index);
      });
    });
  }
}
init_tabnav();

//0310
function init_accordion() {
  const accordion_list = document.querySelectorAll(".js-accordion dt");
  if (accordion_list.length) {
    function active_accordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    accordion_list.forEach((item) => {
      item.addEventListener("click", active_accordion);
    });
  }
}
init_accordion();

//0311
function init_scroll() {
  const links_int = document.querySelectorAll('a[href^= "#"]');
  function scroll_to(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  links_int.forEach((link) => {
    link.addEventListener("click", scroll_to);
  });
}
init_scroll();

//0312
function init_ascroll() {
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
init_ascroll();
