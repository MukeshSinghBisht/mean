FROM node:8

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm
RUN npm build

EXPOSE 4040

CMD ["npm", "serve"]
