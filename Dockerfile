FROM node:12-alpine

COPY package* ./

RUN npm install

COPY . .

RUN npm run build
CMD [ "npm", "run", "serve" ]

EXPOSE 8080