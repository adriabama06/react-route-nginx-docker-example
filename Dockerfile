FROM nginx

RUN rm -drf /usr/share/nginx/html/50x.html
RUN rm -drf /etc/nginx/conf.d/default.conf

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
