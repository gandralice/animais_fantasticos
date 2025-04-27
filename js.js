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
