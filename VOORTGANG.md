# Noodpagina's storing mijn.host s13 (13-10-2026)

## Opdracht eigenaar (13-10)
"Jij hebt al mijn apis doe alles wat jij kan en lukt het niet laat weten hoe we zorgen dat jij het wel kan"
en "En maak voor alle andere sites die eruit liggen ook zo iets" (zoals de noodpagina van San Tiago).

## Stand
- santiagotiel.nl + www: noodpagina LIVE 13-10 (eigen repo projecten/santiago-noodpagina, Coolify-app
  kkzmvnhjx23xoedhnegtbrjm, Let's Encrypt geldig tot 11-01-2027, 503 + Retry-After).
- Gemeten 13-10: 404 op materprojecten.nl, hondenhotelkristien.nl, yescarwash.nl, jpets.nl (yescare.nl ook, maar had nooit een site: alleen Plesk-standaardpagina en mail, dus geen noodpagina);
  houthdiensten.nl lege standaardpagina. yesfit.nu en winkandwear.nl werken (niet nodig).
  DNS van alle zes bij mijn.host (ns1.webhost.company).
- Deze repo: een nginx-container voor alle zes, per domein een map onder site/sites/<domein>/.
  Voorbeeldadressen nood-<naam>.pardodesign.app (noindex).

## Volgende stap
1. Hulpagenten bouwen per site de pagina (bron: kopie in Downloads of Wayback, niets verzinnen).
2. Nakijken, GitHub-repo, Coolify-app met de voorbeeldadressen, laten zien.
3. Live pas na "zet live" plus DNS-wissel (A apex en www naar 76.13.146.46, AAAA weg, MX laten staan).
   DNS zelf kan alleen als IP 145.53.145.203 op de whitelist van de mijn.host API-sleutel staat.

## Stand 13-10 (later)
- Repo github.com/PardoDesign/noodpaginas (public), Coolify-project noodpaginas (1deg3n1beb9cqn1d93utckpe),
  app f0c5dbcowj2g3xsafmpft98o. Voorbeelden werken (503 + noindex): nood-hondenhotel, nood-yescarwash,
  nood-jpets, nood-houthdiensten .pardodesign.app. materprojecten nog in aanbouw.
- yescare.nl valt af: nooit een site gehad (alleen Plesk-standaardpagina en mail).
- Santiago: Route en Mail als kleine iconen, lokaal gecommit 34a95d4, wacht op "zet live".
- Uitgepakte backups met klantdata in C:\Users\Admin\AppData\Local\Temp\nood-* : weggooien na afloop.

## Stand 13-10 (eind)
- materprojecten.nl af, gepusht en uitgerold: nood-materprojecten.pardodesign.app geeft 503 + noindex.
  Gegevens uit de backup van maart 2025 (Kerkeland 21 Echteld, 06 20 11 44 75): eigenaar laat Mark bevestigen.
- Alle vijf voorbeelden staan. Live per site pas na "zet live": domeinen apex+www aan app
  f0c5dbcowj2g3xsafmpft98o, uitrollen, DNS omzetten, certificaat meten.
- Open vragen: hondenhotel WhatsApp zelfde nummer?; houth grote routeknop weg (op afspraak)?

## Stand 13-10 21:10
- hondenhotelkristien.nl, www en reserveren. LIVE op de noodpagina (geldig cert, knop Reserveren naar Aniday, statustijd hersteld).
- Andere vier staan klaar als voorbeeld; draaiboek: C:\MiCasa\docs\runbook-noodpagina-bij-storing.md.
- Volgende: hondenhotel terugzetten zodra mijn.host de site terug heeft; Temp\nood-* mappen opruimen.
