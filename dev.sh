sudo docker build --tag react-route-nginx .
sudo docker run -p 8081:80 -it --rm --name react-route-nginx-server react-route-nginx