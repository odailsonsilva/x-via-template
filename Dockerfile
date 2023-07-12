FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json yarn.lock tsconfig*.json craco.config.js ./
RUN yarn install --immutable --immutable-cache --check-cache

COPY ./server.js ./server.js

COPY ./build/ ./build/


EXPOSE 8080

CMD ["node", "server.js"]