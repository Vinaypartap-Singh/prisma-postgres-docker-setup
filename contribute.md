## Manual Installation

- Install node js locally ()
- clone the repo
- install dependencies (npm install)
- start db locally
  - either use neon.tech
  - or local postgresql
- change the .env file add your db credentials
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker Installation

- Install Docker
- Here in docker we need to setup network in order to keep container connected as both are running on different containers for now
- Start the Database - `docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
- Build the image - `docker build -t docker-postgres-app .`
- Start the image - `docker run -e DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgresql"  --network user_project -d -p 3000:3000 docker-postgres-app`
-

## Docker compose installation Steps

- Install docker, docker-compose
- Run `docker-compose up`
