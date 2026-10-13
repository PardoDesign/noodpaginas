// Toont of we nu telefonisch en via WhatsApp bereikbaar zijn (Nederlandse tijd) en markeert vandaag.
(function () {
  // 0 = zondag ... 6 = zaterdag; blokken in uren.
  // Bron: hondenhotelkristien.nl, pagina Contact en de voet ("ma t/m vrij: 7:00-12:00 & 15:00-19:00",
  // "zat & zon: 9:00-12:00 & 15:00-18:00"), gelezen uit de kopie van 30-06-2026.
  var doordeweeks = [[7, 12], [15, 19]];
  var weekend = [[9, 12], [15, 18]];
  var tijden = { 0: weekend, 1: doordeweeks, 2: doordeweeks, 3: doordeweeks, 4: doordeweeks, 5: doordeweeks, 6: weekend };
  var namen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

  var delen = {};
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  }).formatToParts(new Date()).forEach(function (d) { delen[d.type] = d.value; });
  var dag = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(delen.weekday);
  if (dag < 0) return;
  var uur = parseInt(delen.hour, 10) + parseInt(delen.minute, 10) / 60;

  // Vandaag markeren in de kaarten
  document.querySelectorAll(".blok[data-dagen]").forEach(function (blok) {
    if (blok.getAttribute("data-dagen").split(",").indexOf(String(dag)) > -1) blok.classList.add("is-vandaag");
  });

  function tijd(u) { return (u < 10 ? "0" : "") + u + ":00"; }

  var tekst = "", open = false;
  var vandaag = tijden[dag];
  for (var i = 0; i < vandaag.length; i++) {
    if (uur >= vandaag[i][0] && uur < vandaag[i][1]) {
      tekst = "Nu bereikbaar tot " + tijd(vandaag[i][1]);
      open = true;
      break;
    }
    if (uur < vandaag[i][0]) {
      tekst = "Vandaag " + (i > 0 ? "weer " : "") + "bereikbaar vanaf " + tijd(vandaag[i][0]);
      break;
    }
  }
  if (!tekst) {
    var morgen = (dag + 1) % 7;
    tekst = "Morgen (" + namen[morgen] + ") weer bereikbaar vanaf " + tijd(tijden[morgen][0]);
  }

  var el = document.getElementById("status");
  if (!el) return;
  el.textContent = tekst;
  if (!open) el.classList.add("is-dicht");
  el.hidden = false;
})();

// Actiebalk op de telefoon alleen tonen als de grote knoppen bovenaan uit beeld zijn.
(function () {
  var balk = document.getElementById("balk");
  var knoppen = document.querySelector(".knoppen");
  if (!balk || !knoppen || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(function (items) {
    balk.classList.toggle("is-zichtbaar", !items[0].isIntersecting && items[0].boundingClientRect.top < 0);
  }).observe(knoppen);
})();
