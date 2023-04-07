FROM node:18

RUN npm i -g yarn --force

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile || yarn install

COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]