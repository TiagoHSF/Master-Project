# PREPARING PROJECT TO BUILD
CRUD Respository | TYPESCRIPT, SEQUELIZE e MYSQL

  Using in Project
   - Plugins ESLINT & PRETTIER
   - GIT
      - .gitignore
   - NPM
      - npm init
      - yarn init -y
   - .editorconfig
      - ident size 2
      - crlf to lf
   - Typescript
      - npm add -D typescript
      - yarn add -D typescript
      - tsc -init
      - yarn tsc --init
         - tsconfig.json
              - "target": "es2017", "allowJs": true, "outDir": "./dist"
   - Eslint
     - npm add -d eslint
     - yarn add -D eslint
     - yarn eslint --init
     - yarn
     - npm install eslint-init -g
     - eslint-init --node
     - yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint
   - Dotenv
     - npm add -g dotenv
   - Scripts desenvolvimento, build, start
     - npm run-script dev ("dev": "ts-node ./src/server.ts")
     - npm run-script build ("build": "tsc")
     - npm run-script start ("start": "node ./dist/server.js")
   - Express
     - npm add express
        - Types (npm add -D @types/express)
        - npm install -g ts-node
        - npm run-script dev
   - .env.local
     - .env (`${NAME}`)
  
  
  # PREPARING PROJECT TO CRUD, SEQUELIZE, MYSQL
  - CRUD
    - CREATE, READ, UPDATE, DELETE
  - Sequelize library
    - npm add -g sequelize 
    - npm -g i mysql2
  - .env ({
    DATABASE_HOST='localhost',
    DATABASE_PORT='3306',
    DATABASE_NAME='',
    DATABASE_USER='',
    DATABASE_PASS='',
   })
