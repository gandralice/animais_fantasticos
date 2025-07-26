//0311
export default function init_scroll() {
  const links_int = document.querySelectorAll('a[href^="#"]');
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
