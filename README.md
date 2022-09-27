# Express Rest Boilerplate

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A Minimal Starter Boilerplate for NodeJS REST API with ExpressJS & MongoDB.

## Tech Stack

**Language:** JavaScript <br/>
**Server:** NodeJS, ExpressJS <br/>
**Database:** MongoDB <br/>

## Project Structure

```bash
express-rest-boilerplate
 ┣ src
 ┃ ┣ config
 ┃ ┃ ┗ database.js
 ┃ ┣ controllers
 ┃ ┃ ┣ auth.controller.js
 ┃ ┃ ┣ file.controller.js
 ┃ ┃ ┗ user.controller.js
 ┃ ┣ models
 ┃ ┃ ┗ User.model.js
 ┃ ┣ routes
 ┃ ┃ ┣ auth.routes.js
 ┃ ┃ ┣ file.routes.js
 ┃ ┃ ┗ user.routes.js
 ┃ ┣ utils
 ┃ ┃ ┣ config.js
 ┃ ┃ ┣ protected.js
 ┃ ┃ ┗ response.js
 ┃ ┗ view
 ┃ ┃ ┗ serverRunning.html
 ┣ uploads
 ┃ ┗ LOCAL_FILE_UPLOADS
 ┣ .gitignore
 ┣ package-lock.json
 ┣ package.json
 ┣ server.js
 ┗ yarn.lock
```

## How to use?

To use the boilerplate you have to clone the repository first. To clone the repository using the command given.

```bash
git clone https://github.com/ahmmedabir9/express-rest-boilerplate.git
```

## How to install?

To install the boilerplate your device must have **NodeJS** installed. To check your device contains **NodeJS** use the following command on your **command prompt**.

For windows:

```bash
node -v
```

For mac:

```bash
node -v
```

For linux:

```bash
node -v
```

Visual representation of command prompt.

![node version](https://i.ibb.co/cQg6SMS/image.png "node version")

If your device doesn't even have **NodeJS** installed, please go to the official website of [NodeJS](https://nodejs.org/en/) and install the **LTS version** of NodeJS.

![nodejs websilte](https://i.postimg.cc/gdJ4VYMD/image.png "nodejs website")

After completing the installation of **NodeJS**, please clone the project with the command given in the **How to use?** section and then follow the commands given using the **command prompt**.

```bash
  cd express-rest-boilerplate
```

If you are using \*_npm_ then use

```bash
  npm i
```

Or if you are using **yarn** then use

```bash
  yarn install
```

## Connect with database

To connect with MongoDB please go to the **src** folder then open **config** folder.

```bash
  cd src
  cd config
```

and open database file and add your database connection string like below.

```js
module.exports = {
  database:
    "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]",
};
```

## How to run?

For development environment:

```bash
  npm run dev
```

For production environment:

```bash
  npm start
```

## PORT

In the development server by default, it will open at port **5000**, and in the production server, it will open in the server's default port.

## Authors

- [@ahmmedabir9](https://github.com/ahmmedabir9)

## Contributors

<a href="https://github.com/ahmmedabir9/express-rest-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ahmmedabir9/express-rest-boilerplate" />
</a>
