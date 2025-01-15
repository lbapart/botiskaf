FROM node:23.6.0

WORKDIR /app

COPY package.json package-lock.json ./


COPY . .

RUN npm install --verbose
RUN npm run build --verbose

EXPOSE 3000

CMD ["npm", "start"]