// Actiebalk op de telefoon alleen tonen als de grote knoppen bovenaan uit beeld zijn.
(function () {
  var balk = document.getElementById("balk");
  var knoppen = document.querySelector(".knoppen");
  if (!balk || !knoppen || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(function (items) {
    balk.classList.toggle("is-zichtbaar", !items[0].isIntersecting && items[0].boundingClientRect.top < 0);
  }).observe(knoppen);
})();
