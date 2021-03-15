FROM node

WORKDIR /source

ADD package.json /source

RUN npm install --silent

ADD . /source

CMD [ "npm", "run", "dev:watch" ]