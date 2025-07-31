export default function init_tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", on_mouseover);
  });

  function on_mouseover(event) {
    const tooltip_box = criar_tooltip_box(this);

    on_mousemove.tooltip_box = tooltip_box;
    this.addEventListener("mousemove", on_mousemove);

    on_mouseleave.tooltip_box = tooltip_box;
    on_mouseleave.element = this;
    this.addEventListener("mouseleave", on_mouseleave);
  }

  const on_mousemove = {
    handleEvent(event) {
      this.tooltip_box.style.top = event.pageY + 10 + "px";
      this.tooltip_box.style.left = event.pageX + 10 + "px";
    },
  };

  const on_mouseleave = {
    handleEvent() {
      this.tooltip_box.remove();
      this.element.removeEventListener("mouseleave", on_mouseleave);
      this.element.removeEventListener("mousemove", on_mousemove);
    },
  };

  function criar_tooltip_box(element) {
    const tooltip_box = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltip_box.classList.add("tooltip");
    tooltip_box.innerText = text;
    document.body.appendChild(tooltip_box);
    return tooltip_box;
  }
}
