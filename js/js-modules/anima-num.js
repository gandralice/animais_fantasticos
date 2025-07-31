export default function init_anima_num() {}

const nums = document.querySelectorAll("[data-num]");

nums.forEach((num) => {
  const total = +num.innerHTML;
  const incremento = total / 600;
  let start = 0;
  const timer = setInterval(() => {
    start++;
    num.innerHTML = start;
    if (start >= total) {
      clearInterval(timer);
    }
  }, incremento);
});
