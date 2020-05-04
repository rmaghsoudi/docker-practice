# instead of ubuntu:latest + installing NodeJS
FROM node:latest

WORKDIR /app
ADD package.json .
RUN npm install