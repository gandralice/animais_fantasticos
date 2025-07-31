import outside_click from "./outsideclick.js";

export default function init_menumobile() {
  const menu_btn = document.querySelector('[data-menu="button"]');
  const menu_list = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menu_btn) {
    function menu_ev(event) {
      menu_list.classList.toggle("ativo");
      outside_click(menu_list, eventos, () => {
        menu_list.classList.remove("ativo");
      });
    }
    eventos.forEach((user_ev) => {
      menu_btn.addEventListener(user_ev, menu_ev);
    });
  }
}
