document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
  el.style.left = Math.random() * 500 + "px";
  el.style.top  = Math.random() * 200 + "px";
  });
});
document.querySelectorAll('.mushi').forEach(function (el) {
  el.addEventListener('mouseover', function () {
  el.style.left = (Math.random() * 490 + 360) + "px";
  el.style.top  = (Math.random() * 130 + 190) + "px";
  });
});