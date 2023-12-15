# How works?
To understand the workflow, start by building the code. This process generates static files and an index.html file. Nginx is then responsible for serving the static files. If the requested route does not exist, Nginx returns the index.html file, allowing React Router to handle the rest of the application.

> [!TIP]
> To delve into the implementation details, I recommend examining the following files:
- [nginx.conf](./nginx.conf)
- [Dockerfile](./Dockerfile)
- [docker-compose.yml](./docker-compose.yml)

The remaining code follows the standard structure of a React + Vite application.

# Deploy with Docker
Before proceeding, execute the following command to build the code.
```bash
npm run build
```
## *Without* Docker compose
You can now build the Docker image using the following command
```bash
docker build --tag react-route-nginx .
```

And then run the Docker container
```bash
docker run -p 80:80 -v ./dist:/usr/share/nginx/html -dt --rm --name react-route-nginx-server react-route-nginx
```

To stop the container, use
```bash
docker stop react-route-nginx-server
```
If you wish to remove the image, use
```bash
docker rmi react-route-nginx
```

## *With* Docker compose *(better for me)*
Thanks to Docker Compose, you can start the application with a single command
```bash
docker compose up -d
```
To stop and clean up, use the following command
```bash
docker compose down --rmi all
```
This approach simplifies the deployment process and enhances manageability.
