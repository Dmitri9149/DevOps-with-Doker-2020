FROM ubuntu:16.04

WORKDIR /dist 
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs
COPY package.json /dist
RUN npm install
COPY . /dist
EXPOSE 5000
CMD npm start
