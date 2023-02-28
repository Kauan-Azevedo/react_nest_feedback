FROM node:18-alpine

EXPOSE 3000

WORKDIR /frontend

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]
