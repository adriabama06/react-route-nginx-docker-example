# How works?
First build the code, it generates static files and one index.html 
Nginx has the work whith give the static files and if the router not exist return index.html to make React Router do the rest of the work.

# Deploy with Docker
Befor any thing run the command below to build the code.
```bash
npm run build
```
## Without Docker compose
Now you can build the Docker
```bash
docker build --tag temp .
```
And now you can run it
```bash
docker...
```

## With Docker compose
Thanks to Docker compose you can directly run
```bash
docker compose up -d
```
