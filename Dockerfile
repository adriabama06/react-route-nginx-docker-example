FROM nginx

RUN rm -drf /usr/share/nginx/html/50x.html
RUN rm -drf /etc/nginx/conf.d/default.conf

# Pre copy the build files if you want, or else (by default) use -v (volumes)
#COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
