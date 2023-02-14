FROM node:16.18.1-alpine
WORKDIR /app
COPY ./yarn.lock ./yarn.lock
COPY ./package.json ./package.json
RUN npm install -g serve
RUN npm i
COPY . .
RUN npm run build
ENV NODE_ENV production
CMD ["serve", "-s", "build"]