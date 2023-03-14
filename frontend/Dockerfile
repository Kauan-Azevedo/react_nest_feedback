# FROM node:18-alpine AS builder
# WORKDIR /front

# COPY ./frontend ./front
# COPY ./frontend/package*.json ./front/

# RUN yarn
# RUN yarn build

# EXPOSE 9000

# CMD yarn start


FROM node:18-alpine AS build-front
WORKDIR /app_front

COPY ./frontend .
COPY ./frontend/package.json .

RUN yarn
RUN yarn build

EXPOSE 9000

CMD yarn start