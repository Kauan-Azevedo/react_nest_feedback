FROM node:18-alpine AS build-back
WORKDIR /app_back

COPY ./backend .
RUN npm install
RUN npx prisma generate
RUN npm run build
EXPOSE 3001
ENV PORT 3001

CMD npm run start:migrate:prod



# FROM node:18-alpine AS deps
# WORKDIR /deps

# COPY ./backend/package*.json ./package*.json
# RUN npm install


# FROM node:18-alpine AS build
# WORKDIR /app

# COPY --from=deps ./deps/node_modules ./node_modules
# COPY ./backend ./app
# RUN npx prisma generate
# RUN npm run build

# FROM node:18-alpine AS deploy
# WORKDIR /back

# ENV NODE_ENV production

# COPY --from=build ./app ./back

# EXPOSE 3001

# ENV PORT 3001

# CMD npm run start:migrate:prod
