FROM node:24-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgresql"

RUN npx prisma migrate dev --name "prod_migration"
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]