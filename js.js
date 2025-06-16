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
const accordion_list = document.querySelectorAll(".js-accordion dt");
function active_accordion() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}
accordion_list.forEach((item) => {
  item.addEventListener("click", active_accordion);
});
