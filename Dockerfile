FROM node:16

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 4444

CMD ["npm", "run", "server"]