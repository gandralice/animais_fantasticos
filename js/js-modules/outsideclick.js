export default function outside_click(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((user_ev) => {
      setTimeout(() => html.addEventListener(user_ev, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((user_ev) => {
        html.removeEventListener(user_ev, handleOutsideClick);
      });
      callback();
    }
  }
}
