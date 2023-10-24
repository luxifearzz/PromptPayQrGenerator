FROM node:slim

WORKDIR /app

COPY ./backend/package.json /app

RUN npm install

COPY ./backend .

WORKDIR /app/backend

EXPOSE 3000

CMD ["npm", "run", "0"]