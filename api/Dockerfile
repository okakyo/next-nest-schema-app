FROM node:17.2-alpine as base

WORKDIR /apps/base

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

# RUN yarn build

CMD yarn start:dev

FROM node:17.2-alpine as production

WORKDIR /apps/production

RUN rm -rf node_modules

# COPY --from=base /apps/base/node_modules .
# COPY --from=base /apps/base/.next .

CMD [ "sh","-c","yarn start"]

