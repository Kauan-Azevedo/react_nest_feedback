# FROM node:18-alpine As development
# # Especifica a versao do node. ver no DockerHub

# WORKDIR /usr/src/app
# # Cada coamndo executado será nesse contexto

# COPY package*.json ./
# # Copia o package.json e package-lock.json caso exista

# RUN npm ci --only=development
# # npm ci? é semelhante ao npm install
# # O comando RUN roda durante o build do container
# # --only instala SOMENTE as devDependencies

# COPY . .
# # Copia os arquivos da aplicação para o container

# RUN npm run build


# FROM node:18-alpine As production

# ARG NODE_ENV=production
# # ARG que dine o valor padrão para o NODE_ENV
# ENV NODE_ENV=${NODE_ENV}
# # ENV seta o valor padrão ou oque o usuario passou

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm ci --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD [ "node", "dist/main" ]

#
# =====================================
#

FROM node:18-alpine AS builder 
WORKDIR /api

COPY package*.json /api
COPY prisma ./prisma/
COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3001

CMD npm run start
