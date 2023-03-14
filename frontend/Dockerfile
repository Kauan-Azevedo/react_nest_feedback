FROM node:18-alpine AS builder
WORKDIR /app

# COPY . .
COPY package*.json /app

RUN yarn
RUN yarn build

EXPOSE 9000

CMD yarn start
