FROM node:18-alpine AS deps

WORKDIR /deps
COPY package*.json ./
RUN npm install


FROM node:18-alpine AS build

WORKDIR /app
COPY --from=deps ./deps/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# CMD ["npx", "prisma migrate dev"]


FROM node:18-alpine AS deploy

WORKDIR /api
ENV NODE_ENV production

COPY --from=build ./app .

EXPOSE 3001

ENV PORT 3001

CMD npm run start


# FROM node:18-alpine AS builder 
# WORKDIR /api

# COPY package*.json /api
# COPY prisma ./prisma/
# COPY . .

# RUN npm install
# RUN npx prisma generate
# RUN npm run build

# # CMD ["npx" "prisma" "migrate"]
# CMD npx prisma db push

# FROM node:18-alpine

# # COPY --from=builder /api/node_modules ./node_modules
# # COPY --from=builder /api/package*.json ./
# # COPY --from=builder /api/dist ./dist
# COPY --from=builder ./api .

# EXPOSE 3001

# # CMD ["npm", "run", "start"]
# CMD npm run start