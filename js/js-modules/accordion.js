//0310
export default function init_accordion() {
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
