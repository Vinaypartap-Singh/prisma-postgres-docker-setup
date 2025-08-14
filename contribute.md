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
- Start DB: docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image - `docker build -t user-project`
- Start the image - `docker run -p 3000:3000 user-project`

## Docker compose installation Steps

- Install docker, docker-compose
- Run `docker-compose up`
