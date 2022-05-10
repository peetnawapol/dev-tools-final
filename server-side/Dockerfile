FROM node:16.13.0-alpine

WORKDIR /usr/services

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]