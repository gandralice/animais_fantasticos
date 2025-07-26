export default function init_modal() {
  const abrir_btn = document.querySelector('[data-modal="abrir"]');
  const fechar_btn = document.querySelector('[data-modal="fechar"]');
  const container_modal = document.querySelector('[data-modal="container"]');

  if (abrir_btn && fechar_btn && container_modal) {
    function toggle_modal(event) {
      event.preventDefault();
      container_modal.classList.toggle("ativo");
    }
    abrir_btn.addEventListener("click", toggle_modal);
    fechar_btn.addEventListener("click", toggle_modal);

    function out_modal(event) {
      if (event.target === this) {
        toggle_modal(event);
      }
    }
    container_modal.addEventListener("click", out_modal);
  }
}
