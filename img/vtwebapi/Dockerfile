FROM node:12-alpine

WORKDIR /tmp/app 
COPY app/ /tmp/app

RUN npm install

EXPOSE 80
CMD ["node" , "server.js"]
