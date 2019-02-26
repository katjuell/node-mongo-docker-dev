FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY app/package*.json ./

USER node

RUN npm install

COPY --chown=node:node ./app .

EXPOSE 8080

CMD [ "node", "app.js" ]
