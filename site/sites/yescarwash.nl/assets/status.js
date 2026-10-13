// Toont "nu open" of de tijden van vandaag, in Nederlandse tijd, en markeert vandaag in de tabel.
(function () {
  // 0 = zondag ... 6 = zaterdag; [open, dicht] in hele uren.
  // Bron: yescarwash.nl (Wayback Machine, opname 11-04-2025) en de nieuwe yescarwash-site, gelezen 13-10-2026.
  var tijden = { 0: [10, 15], 1: [10, 17], 2: [10, 17], 3: [10, 17], 4: [10, 17], 5: [10, 17], 6: [10, 15] };
  var namen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

  var delen = {};
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  }).formatToParts(new Date()).forEach(function (d) { delen[d.type] = d.value; });
  var dag = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(delen.weekday);
  if (dag < 0) return;
  var uur = parseInt(delen.hour, 10) + parseInt(delen.minute, 10) / 60;

  var rijen = document.querySelectorAll(".tijden tr[data-dagen]");
  for (var r = 0; r < rijen.length; r++) {
    if ((" " + rijen[r].getAttribute("data-dagen") + " ").indexOf(" " + dag + " ") > -1) rijen[r].classList.add("is-vandaag");
  }

  function tijd(u) { return (u < 10 ? "0" : "") + u + ":00"; }
  function volgende() {
    for (var i = 1; i <= 7; i++) {
      var d = (dag + i) % 7;
      if (tijden[d]) return (i === 1 ? "morgen" : namen[d]) + " vanaf " + tijd(tijden[d][0]);
    }
    return "";
  }

  var vandaag = tijden[dag];
  var tekst, open = false, straks = false;
  if (vandaag && uur >= vandaag[0] && uur < vandaag[1]) {
    tekst = "Nu open tot " + tijd(vandaag[1]);
    open = true;
  } else if (vandaag && uur < vandaag[0]) {
    tekst = "Vandaag open van " + tijd(vandaag[0]) + " tot " + tijd(vandaag[1]);
    straks = true;
  } else {
    tekst = "Nu gesloten, weer open " + volgende();
  }

  var el = document.getElementById("status");
  el.textContent = tekst;
  if (!open && !straks) el.classList.add("is-dicht");
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
