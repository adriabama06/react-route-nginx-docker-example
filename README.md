# How works?
First build the code, it generates static files and one index.html  
Nginx has the work of give the static files and if the route not exist return index.html to make React Router do the rest of the work.

> [!TIP]
> For learn how I did this I recommend see the next files:
- [nginx.conf](./nginx.conf)
- [Dockerfile](./Dockerfile)
- [docker-compose.yml](./docker-compose.yml)

The rest of the code is like other React + Vite code

# Deploy with Docker
Befor any thing run the command below to build the code.
```bash
npm run build
```
## *Without* Docker compose
Now you can build the Docker
```bash
docker build --tag react-route-nginx .
```

And now you can run it
```bash
docker run -p 80:80 -v ./dist:/usr/share/nginx/html -dt --rm --name react-route-nginx-server react-route-nginx
```

For stop... First stop the container
```bash
docker stop react-route-nginx-server
```
And remove the image, if you want :D?
```bash
docker rmi react-route-nginx
```

## *With* Docker compose *(better for me)*
Thanks to Docker compose you can directly run the command below to start
```bash
docker compose up -d
```
And the command blow to stop and clean up
```bash
docker compose down --rmi all
```
