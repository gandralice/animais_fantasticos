export default function init_dropdown() {
  const dropdown_menus = document.querySelectorAll("[data-dropdown]");
  dropdown_menus.forEach((menu) => {
    menu.addEventListener("click", open_menu);
    menu.addEventListener("touchstart", open_menu);
  });

  function open_menu(event) {
    event.preventDefault();
    this.classList.add("ativo");
    out_menu(this, () => {
      this.classList.remove("ativo");
    });
  }

  function out_menu(element, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", out_click);
      element.setAttribute(outside, "");
    }
    function out_click(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        html.removeEventListener("click", out_click);
        callback();
      }
    }
  }
}
