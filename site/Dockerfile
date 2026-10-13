# Noodpagina's voor klantsites die door de storing bij mijn.host (s13, 12-10-2026) plat liggen.
# Een nginx-container voor alle domeinen; per domein een eigen map onder sites/.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY sites /usr/share/nginx/html/sites
EXPOSE 80
