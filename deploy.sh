sudo docker build --tag react-route-nginx .
sudo docker run -p 80:80 -dt --rm --name react-route-nginx-server react-route-nginx