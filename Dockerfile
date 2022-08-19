FROM node:lts-alpine

RUN apk update

WORKDIR /usr/src/app

COPY package*.json yarn.lock /usr/src/app/

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "yarn", "dev" ]
