# Noodpagina's klantsites (storing mijn.host s13, oktober 2026)

Tijdelijke noodpagina's voor klantsites die door de storing bij mijn.host (server s13, vanaf 12-10-2026)
plat liggen. Een nginx-container (Coolify) voor alle domeinen; per domein een map in `site/sites/<domein>/`.
Elk pad geeft de noodpagina met status 503 en Retry-After, zodat Google de oude pagina's bewaart.
Gegevens komen alleen uit de eigen publieke site van de klant (kopie of Wayback), niets verzonnen.

Voorbeeldadressen (noindex): `nood-<naam>.pardodesign.app`, zie `site/nginx.conf`.

Sinds 01-11-2026 staat er voor elke actieve website een noodpagina klaar (eigenaar 31-10). Waar de site
niet bij mijn.host draait (VPS of Cloudflare), staat de omzetstap per site in
`C:\MiCasa\docsunbook-noodpagina-bij-storing.md`; de stappen hieronder gelden alleen voor mijn.host-sites.

## Live zetten per domein
1. Domein toevoegen aan de Coolify-app (https://<domein> en https://www.<domein>), opnieuw uitrollen.
2. DNS bij mijn.host: A van apex en www naar 76.13.146.46, AAAA van apex en www weg. MX, mail en * laten staan.
3. Certificaat komt via Let's Encrypt zodra de DNS wijst.

## Terugzetten (als mijn.host de site terug heeft)
A van apex en www terug naar 217.180.14.113, AAAA terug naar 2a11:4881:1:2a0e::1, daarna het domein uit
de Coolify-app halen.
