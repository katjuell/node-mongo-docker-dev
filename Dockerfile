FROM node:10

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

RUN chown -R node:node .

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD [ "npm", "start" ]
